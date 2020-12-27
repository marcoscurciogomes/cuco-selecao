import React, { Component } from 'react';

import axios from "axios";
import qs from "querystring";

export default class Edit extends Component {

    constructor() {
        super()
        this.state = {
            nome_completo: "",
            cpf: "",
            data_nascimento: "",
            telefone: ""
        }
    }

    render() {

        let id_cliente = this.props.match.params.id;

        return (
            <div>
                <h4>Cadastrar Cliente</h4>
                <hr />
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="nome_completo">Nome Completo:</label>
                        <input type="text" class="form-control" value={this.state.nome_completo} onChange={(value) => this.setState({ nome_completo: value.target.value })} placeholder="Digite o nome completo do cliente" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="cpf">CPF:</label>
                        <input type="text" class="form-control" value={this.state.cpf} onChange={(value) => this.setState({ cpf: value.target.value })} placeholder="Digite o CPF do cliente." />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="data_nascimento">Data de Nascimento:</label>
                        <input type="text" class="form-control" value={this.state.data_nascimento} onChange={(value) => this.setState({ data_nascimento: value.target.value })} />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="telefone">Telefone </label>
                        <input type="text" class="form-control" value={this.state.telefone} onChange={(value) => this.setState({ telefone: value.target.value })} placeholder="(99) 9999-9999" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <button class="btn btn-primary btn-block" type="submit" onClick={() => this.salvarCliente()}>Salvar</button>
                    </div>
                </div>
            </div>
        )
    }
    salvarCliente() {
        const url = "http://localhost:8080/api/clientes/create/";

        const data = {
            nome_completo: this.state.nome_completo,
            cpf: this.state.cpf,
            data_nascimento: this.state.data_nascimento,
            telefone: this.state.telefone
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post(url, qs.stringify(data), config).then(response => {
            const res = response.data
            if (res.success) {
                alert("Cliente cadastrado com sucesso.");
                console.log(response);
            }
        }).catch(error => {
            alert("Ocorreu um erro durante a requisição. Verifique o log para mais detalhes.");
            console.log("Ocorreu um erro durante a requisição: POST");
            console.log("-URL:" + url);
            console.log(error);
        })
    }
}