import express from "express";
import app from "../app.js";
import users from "./usersRoutes.js";

const routes = (app) => {
    app.route("/api/v1").get((req, res) => {
        res.status(200).send({name: "Initializing API."});
    });

    app.use(
        express.json(),
        users
    );
}

export default routes;