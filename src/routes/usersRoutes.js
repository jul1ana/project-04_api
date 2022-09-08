import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router
    .get("/api/v1/user", UserController.listarUser)
    .get("/api/v1/user/busca", UserController.listarUserPorNome)
    .get("/api/v1/user/:id", UserController.listarUserPorId)
    .post("/api/v1/user", UserController.cadastrarUser)
    .put("/api/v1/user/:id", UserController.atualizarUser) 
    .delete("/api/v1/user/:id", UserController.excluirUser) 

export default router;