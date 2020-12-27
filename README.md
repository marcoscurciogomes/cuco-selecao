

## API com PHP (CodeIgniter 4) e React

1.  Importar base de dados: Importar o arquivo clientes.sql via PHPMyAdmin
    
2.  Importar arquivos na pasta htdocs do Xampp.
    
3.  Executar projeto no prompt de comando (back-end) (CodeIgniter) php spark serve
    
4.  Abrir o projeto em  http://localhost:8080 Para criar um cliente, clicar em "Criar Cliente", para consultar em "Consultar".
    

----------

## Testar API com Postman:

1.  Consultar todos os clientes: 
* URL:  http://localhost:8080/api/clientes/getAll
* METHOD: GET
* PARÂMETROS: Nenhum
    
2. Consultar cliente por ID: 
* URL: http://localhost:8080/api/clientes/getAll/[id_cliente]
* METHOD: GET 
* PARÂMETROS: 
	id_cliente: id do cliente no banco de dados. Obrigatório.
    
3. Cadastrar cliente: 
* URL:  http://localhost:8080/api/clientes/create 
* METHOD: POST 
* BODY: 
	nome_completo: Nome completo do Cliente. String. 
	data_nascimento: Data de Nascimento do Cliente no formato dd/mm/yyyy. String. 
	cpf: CPF do cliente. String. 
	telefone: Telefone do Cliente. String.
* Formato: x-www-form-urlencoded
    
4. Atualizar Cliente 
* URL: http://localhost:8080/api/clientes/update/[id_cliente]
* METHOD: PUT 
* BODY: 
	nome_completo: Nome completo do Cliente. String. 
	data_nascimento: Data de Nascimento do Cliente no formato dd/mm/yyyy. String. 
	cpf: CPF do cliente. String. 
	telefone: Telefone do Cliente. String. 
* Formato: x-www-form-urlencoded 
* PARÂMETROS: id_cliente: id do cliente no banco de dados. Obrigatório.
    
5. Excluir Cliente 
* URL:  http://localhost:8080/api/clientes/delete/[id_cliente]
* METHOD: DELETE 
* PARÂMETROS: 
id_cliente: id do cliente no banco de dados. Obrigatório.
    

**Observação: O projeto deve ser executado na porta 8080. Caso a porta esteja em uso, parar o Apache no painel de controle do XAMPP*
