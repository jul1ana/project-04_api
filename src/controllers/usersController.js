import users from "../models/User.js";

class UserController {

    static listarUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users);
        });
    }

    static cadastrarUsers = (req, res) => {
        let user = new users(req.body);

        user.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar usuário.`});
            } else {
                res.status(201).send(user.toJSON());
            }
        });
    }

}

export default UserController;