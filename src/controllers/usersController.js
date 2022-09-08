import users from "../models/User.js";

class UserController {

    static listUser = (req, res) => {

        users.find((err, users) => {
            const page = req.query.page;
            const limit = req.query.limit;
    
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
    
            const resultUsers = users.slice(startIndex, endIndex);
            res.status(200).json(resultUsers);
            // res.status(200).json(users);
        }).select("-password");
    }

    static listUserByName = (req, res) => {
        const name = req.query.name;

        users.find({'name': {$regex: name, $options:"i"}}, {}, (err, users) => {
            if(err) {
                res.status(404).send({message: `${err.message} - User not found.`});
            } else {
                res.status(200).send(users);
            }
        }).select("-password");
    }

    static listUserById = (req, res) => {
        const id = req.params.id;

        users.findById(id, (err, users) => {
            if(err) {
                res.status(404).send({message: `${err.message} - User ID not found.`});
            } else {
                res.status(200).send(users);
            }
        }).select("-password"); 
    }

    static registerUser = (req, res) => {

        let user = new users(req.body);

        user.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - failed to register user.`});
            } else {
                res.status(201).send(user.toJSON());
            }
        });
    }

    static updateUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Successfully updated user!"});
            } else {
                res.status(404).send({message: err.message});
            }
        });
    }

    static deleteUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "User successfully removed!"});
            } else {
                res.status(404).send({message: err.message});
            }
        });
    }

}

export default UserController; 