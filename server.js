const express = require('express');
const cors = require('cors');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    const {email, password} = req.body;
    const user = await prisma.userModel.create({data: {email, password}})
    res.json(user);
});

app.get('/register', async (req, res) => {
    const users = await prisma.userModel.findMany();
    res.json(users);
});

app.get('/register/:id', async (req, res) => {
    const userId = parseInt(req.params.id)
    const user = await prisma.userModel.findFirst({where: {id: userId}})
    res.json(user)
})

app.put('/register/:id', async (req, res) => {
    const userId = parseInt(req.params.id)
    const {email, password} = req.body
    const updatedUser = await prisma.userModel.update({where: {id: userId}, data: {email, password}})
    res.json(updatedUser)
})

app.delete('/register/:id', async (req, res) => {
    const deleteId = parseInt(req.params.id)
    const user = await prisma.userModel.delete({where: {id: deleteId}})
    res.json(user)
})

app.delete('/register', async (req, res) => {
    const deleteAll = await prisma.userModel.deleteMany()
    res.json(deleteAll)
})

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});