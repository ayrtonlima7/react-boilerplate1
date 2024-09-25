const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Rota para registrar um novo usuário
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Criar um novo usuário no banco de dados
        const user = await prisma.user.create({
            data: {
                email,
                password, // Você vai adicionar o hash da senha mais tarde
            },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao registrar usuário.' });
    }
});

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});