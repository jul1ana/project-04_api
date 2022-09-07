import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router
    .get("/api/v1/user", UserController.listarUsers)
    .get("/api/v1/user/:id", UserController.listarUserPorId)
    .post("/api/v1/user", UserController.cadastrarUsers)
    .put("/api/v1/user/:id", UserController.atualizarUsers) 

export default router;