import express from "express";
import db from "./config/dbConnect.js"; 

db.on("error", console.log.bind(console, "Erro de conexão."));
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
})

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

app.get("/api/v1/user/:id", (req, res) => {
    let index = buscaUsuario(req.params.id);
    res.json(users[index]);
})

app.post("/api/v1/user", (req, res) => {
    users.push(req.body);
    res.status(201).send("Usuário cadastrado com sucesso!");
})

app.put("/api/v1/user/:id", (req, res) => {
    let index = buscaUsuario(req.params.id);
    users[index].name = req.body.name;
    res.json(users);
})

app.delete("/api/v1/user/:id", (req, res) => {
    let {id} = req.params;
    let index = buscaUsuario(id);
    users.splice(index, 1);
    res.send(`Usuário ${id} deletado com sucesso!`);
})

function buscaUsuario(id) {
    return users.findIndex(user => user.id == id);
}

export default app 