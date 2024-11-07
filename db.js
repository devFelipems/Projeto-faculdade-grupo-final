const { Client } = require('pg');  // Importa a biblioteca pg

const client = new Client({
  host: 'localhost',               // Endereço do banco de dados
  port: 5432,                      // Porta do banco de dados (padrão: 5432)
  user: 'postgres',             // Substitua com o seu usuário PostgreSQL
  password: '123',           // Substitua com a sua senha do PostgreSQL
  database: 'meu_banco_de_dados'   // Nome do banco de dados
});

client.connect()  // Conecta ao banco de dados
  .then(() => console.log('Conectado ao banco de dados PostgreSQL'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados', err));

module.exports = client;  // Exporta a conexão para ser usada em outros arquivos
