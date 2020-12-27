import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom'

export default class List extends Component {
    constructor() {
        super()
        this.state = {
            listCliente: []
        }
    }

    componentDidMount() {
        console.log("Component List montado.");
        axios.get("http://localhost:8080/api/clientes/getAll").then(response => {
            console.log(response.data);
            this.setState({ listCliente: response.data })
        }).catch(error => {
            alert("Erro:" + error);
        })
    }

    render() {
        return (
            <section>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome Completo</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Data de Nascimento</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listCliente.map((data, i) => {
                                return (
                                    <tr>
                                        <td>{data.id_cliente}</td>
                                        <td>{data.nome_completo}</td>
                                        <td>{data.cpf}</td>
                                        <td>{data.data_nascimento}</td>
                                        <td>{data.telefone}</td>
                                        <td>
                                            <Link to={"/painel/editar/" + data.id_cliente} class="btn btn-warning"> Editar </Link>
                                            <a onClick={() => this.deleteCliente(i, data.id_cliente)} href="#" class="btn btn-danger"> Excluir </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        )
    }
    deleteCliente(i, id_cliente) {
        if (confirm("Deseja realmente remover este cliente?")) {
            const url = "http://localhost:8080/api/clientes/delete/" + id_cliente
            axios.delete(url)
                .then((response) => {
                    const res = response.data
                    if (res.success) {
                        alert("Cliente removido com sucesso.");
                        const list = this.state.listCliente
                        list.splice(i, 1)
                        this.setState({ listCliente: list })
                    }
                })
                .catch(error => {
                    alert("Ocorreu um erro durante a requisição. Verifique o log para mais detalhes.");
                    console.log("Ocorreu um erro durante a requisição: DELETE");
                    console.log("-URL:" + url);
                    console.log("-ID do cliente:" + id_cliente);
                    console.log(error);
                })
        }
    }
}