/*

Git:

git init
git add .
git commit -m "primeiro commit"
git remote add origin https://github.com/seuusuario/repositorio.git
git push -u origin main (--force para forçar o push, caso haja divergências entre o repositório local e o remoto)
git branch (see witch branch u are)
git branch -M main (change branch to main)
git pull origin main --rebase
git add <file_with_conflict>
git rebase --continue
Para ignroar pastas e arquivos: criar um arquivo .gitignore e colocar o nome da pasta ou arquivo que deseja ignorar, exemplo:
node_modules/
.env


Java:

Estrutura Básica de um Projeto Java:

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }

Java Script #:

Estrutura Básica de uma API:

import api from "express"
const porta = 3000
const api = express()
api.get("/pessoas", (req, res) => {
    res.json(pessoas)
})
api.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
}

Rodar o código:

node nomeDoArquivo.js
npm run dev para rodar o servidor.

Instalação de Pacotes:

npm init -y
npm i express
npm i -D @types/express (-D para instalar como dependência de desenvolvimento, ou seja,
só vai ser usada durante o desenvolvimento e não vai ser instalada em produção)
npm uninstall express @types/express
npm i -D nodemon (pacote para rodar o servidor automaticamente quando houver mudanças no código)
npm i pg
npm install -D typescript txg (para instalar o typescript, ts-node-dev e as tipagens do express, pg e node)
npm i(install) express pg (para instalar ambos os pacotes de uma vez)
npm install -D typescript ts-node-dev @types/express @typs/pg @types/node (para instalar o typescript, ts-node-dev e as tipagens do express, pg e node)
npx tsc --init ou apena um - (para inicializar o typescript, vai criar um arquivo tsconfig.json com as configurações do typescript)

Rest Client:

GET http://localhost:3000/pessoas

###

POST http://localhost:3000/pessoas
Content-Type: application/json

{
    "nome": "Fulano",
    "idade": 22,
    "area": "ti-hardware"
    // Colocar em comentário a parte de idade e area para testar a mensagem de erro, não esquecer de tirar a virgula do nome também.
}

Typescript:

Estrutura Básica de um Programa Typescript:
function main(): void {
    console.log("Hello World");
}
    Postgress: do senai usar extensao postgress e fazer a conexao com o banco de dados da seguinte forma:
    username:postgress, password:alunos ou aluno, database: cafe ou o nome do banco de dados.

Python:

Estrutura Básica de um Script Python:

def main():
    print("Hello World")

C:

Estrutura Básica de um Programa C:

#include <stdio.h>
int main() {
    printf("Hello World\n");
    return 0;

C++:

Estrutura Básica de um Programa C++:

#include <iostream>
using namespace std;
int main() {
    cout << "Hello World" << endl;
    return 0;
}

SQL:

Estrutura Básica de uma Consulta SQL:

DROP TABLE IF EXISTS tabela;
DROP TABLE IF EXISTS tabela2 CASCADE;

CREATE TABLE tabela (
    id INT PRIMARY KEY,
    nome VARCHAR(255),
    idade INT
);

INSERT INTO tabela (id, nome, idade) VALUES (1, 'Gustavo', 30);

SELECT * FROM tabela WHERE condição;

Mensagens de Status:

Respostas Informativas (100 – 199)
Respostas bem-sucedidas (200 – 299)
Mensagens de redirecionamento (300 – 399)
Respostas de erro do cliente (400 – 499)
Respostas de erro do servidor (500 – 599)

Mais Utilizadas:

200 OK: A solicitação foi bem-sucedida.
201 Created: A solicitação foi bem-sucedida e um recurso foi criado como resultado.
400 Bad Request: A solicitação não pôde ser entendida ou foi malformada.
401 Unauthorized: A solicitação requer autenticação do usuário.
403 Forbidden: O servidor entendeu a solicitação, mas se recusa a autorizá-la.
404 Not Found: O recurso solicitado não foi encontrado.
500 Internal Server Error: O servidor encontrou uma condição inesperada que o impediu de atender à solicitação.

*/
