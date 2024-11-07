const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Habilita o CORS para todas as origens
app.use(cors());

// Para interpretar o corpo das requisições como JSON
app.use(express.json());

// Rota para o login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Aqui você pode fazer a verificação no banco de dados
    // No exemplo abaixo, estamos verificando se o username e a senha são "testuser" e "testpassword"
    if (username === "testuser" && password === "testpassword") {
        return res.json({ message: "Login bem-sucedido" });
    } else {
        return res.status(401).json({ message: "Usuário ou senha inválidos" });
    }
});

// Inicia o servidor na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
