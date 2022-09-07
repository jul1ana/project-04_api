import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router
    .get("/api/v1/user", UserController.listarUsers)
    .post("/api/v1/user", UserController.cadastrarUsers)

export default router;