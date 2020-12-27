<?php

namespace App\Models;

use CodeIgniter\Model;

class ClienteModel extends Model
{
    protected $table = 'clientes';
    protected $primaryKey = 'id_cliente';
    protected $allowedFields = ['nome_completo', 'cpf', 'data_nascimento', 'telefone'];

    protected $returnType = 'array';
    protected $useSoftDeletes = false;
}
