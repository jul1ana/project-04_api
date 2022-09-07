import express from "express";
import db from "./config/dbConnect.js"; 
import users from "./models/User.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão."));
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
})

const app = express();

app.use(express.json());

routes(app);

// const users = [
//     {id: 1, "name": "Juliana"},
//     {id: 2, "name": "Otávio"}
// ]

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