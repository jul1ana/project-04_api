import users from "../models/User.js";

class UserController {

    static listarUser = (req, res) => {

        users.find((err, users) => {
            const page = req.query.page;
            const limit = req.query.limit;
    
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
    
            const resultUsers = users.slice(startIndex, endIndex);
            res.json(resultUsers);
            // res.status(200).json(users);
        }).select("-password");
    }

    static listarUserPorId = (req, res) => {
        const id = req.params.id;

        users.findById(id, (err, users) => {
            if(err) {
                res.status(404).send({message: `${err.message} - Id do usuário não encontrado.`});
            } else {
                res.status(200).send(users);
            }
        }).select("-password"); 
    }

    static cadastrarUser = (req, res) => {

        let user = new users(req.body);

        user.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar usuário.`});
            } else {
                res.status(201).send(user.toJSON());
            }
        });
    }

    static atualizarUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Usuário atualizado com sucesso!"});
            } else {
                res.status(404).send({message: err.message});
            }
        });
    }

    static excluirUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(204).send({message: "Usuário removido com sucesso!"});
            } else {
                res.status(404).send({message: err.message});
            }
        });
    }

}

export default UserController; 