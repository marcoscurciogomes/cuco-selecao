<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\ClienteModel;

class Clientes extends ResourceController
{
    use ResponseTrait;

    public function painel()
    {
        echo view('clientes');
    }
    public function index()
    {
        $modelo = new ClienteModel();
        return $this->respond($modelo->findAll());
    }

    public function show($id_cliente = null)
    {
        if (!isset($id_cliente)) {
            $modelo = new ClienteModel();
            return $this->respond($modelo->findAll());
        } else {
            $modelo = new ClienteModel();
            $resultado = $modelo->getWhere(['id_cliente' => $id_cliente])->getResult();
            return ($resultado) ? $this->respond($resultado) : $this->failNotFound('Não foi encontrado nenhum cliente com o id ' . $id_cliente . '.');
        }
    }

    public function create()
    {
        $modelo = new ClienteModel();
        try {
            $dados = [
                'nome_completo' => $this->request->getPost('nome_completo'),
                'cpf' => $this->request->getPost('cpf'),
                'data_nascimento' => $this->request->getPost('data_nascimento'),
                'telefone' => $this->request->getPost('telefone')
            ];
            $modelo->insert($dados);
            return $this->respondCreated([
                'status' => 200,
                'success' => true,
                'messages' => ['Cliente criado com sucesso.']
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 400,
                'success' => false,
                'messages' => ['Ocorreu um erro durante a criação do cliente: ' . $e->getMessage()]
            ]);
        }
    }

    public function update($id_cliente = null)
    {
        try {
            if (!isset($id_cliente)) {
                return $this->fail([
                    'status' => 400,
                    'success' => false,
                    'messages' => ['O ID do cliente deve ser informado.']
                ]);
            } else {
                $cliente = new ClienteModel();
                if ($cliente->find($id_cliente)) {
                    $rawInput =  $this->request->getRawInput();
                    $dados = [
                        'nome_completo' => $rawInput['nome_completo'],
                        'cpf' => $rawInput['cpf'],
                        'data_nascimento' => $rawInput['data_nascimento'],
                        'telefone' => $rawInput['telefone']
                    ];
                    $cliente->update($id_cliente, $dados);
                    return $this->respond([
                        'status' => 200,
                        'success' => true,
                        'messages' => ['Cliente atualizado com sucesso.']
                    ]);
                } else {
                    return $this->fail([
                        'status' => 400,
                        'success' => false,
                        'messages' => ['Cliente inexistente.']
                    ]);
                }
            }
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 400,
                'success' => false,
                'messages' => ['Ocorreu um erro durante a exclusão do cliente: ' . $e->getMessage()]
            ]);
        }
    }

    public function delete($id_cliente = null)
    {
        try {
            $cliente = new ClienteModel();
            if ($cliente->find($id_cliente)) {
                $cliente->delete($id_cliente);
                return $this->respondDeleted([
                    'status' => 200,
                    'success' => true,
                    'messages' => ['success' => 'Cliente removido com sucesso.']
                ]);
            } else {
                return $this->fail([
                    'status' => 400,
                    'success' => false,
                    'messages' => ['Não foram encontrados dados para esse ID (' . $id_cliente . ')']
                ]);
            }
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 400,
                'success' => false,
                'messages' => ['Ocorreu um erro durante a exclusão do cliente: ' . $e->getMessage()]
            ]);
        }
    }
}
