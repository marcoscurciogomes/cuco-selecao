class DataTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let theader = [];
        let columns = this.props.columns;
        debugger;
        for (let i in columns) {
            theader.push(<th data-col={i}>{columns}</th>);
        }

        let clientes = this.props.clientes;
        let tbody = [];
        for (let j in clientes) {
            tbody.push(<tr>
                <td>{clientes[j].id_cliente}</td>
                <td>{clientes[j].nome_completo}</td>
                <td>{clientes[j].data_nascimento}</td>
                <td>{clientes[j].cpf}</td>
                <td>{clientes[j].telefone}</td>
            </tr>);
        }

        return (
            <table class="table-striped">
                <theader>
                    <tr>
                        {theader}
                    </tr>
                </theader>
                <tbody>
                    {tbody}
                </tbody>
            </table>
        );
    }
}

async function CarregarClientes() {
    const request = new Request(`${window.location.origin}/clientes`, {
        method: 'GET',
    });
    let response = await fetch(request);//Realiza o fetch da url repassada via GET
    let data = await response.json();//Transforma a resposta em JSON
    console.log(data);//Escreve os resultados retornados
    debugger;
}

document.querySelectorAll('.table-container')
    .forEach(domContainer => {
        ReactDOM.render(
            React.createElement(DataTable, {
                clientes: CarregarClientes(),
                columns: {
                    id_cliente: "ID",
                    nome_completo: "Nome Completo",
                    data_nascimento: "Data de Nascimento",
                    cpf: "CPF",
                    telefone: "Telefone"
                }
            }),
            domContainer
        );
    });
