import express from "express";

const app = express();

app.use(express.json());

const users = [
    {id: 1, "name": "Juliana"},
    {id: 2, "name": "Otávio"}
]

app.get("/api/v1", (req, res) => {
    res.status(200).send("Inicializando");
})

app.get("/api/v1/user", (req, res) => {
    res.status(200).json(users);
})

app.post("/api/v1/user", (req, res) => {
    users.push(req.body);
    res.status(201).send("Usuário cadastrado com sucesso!");
})

export default app 