import mongoose from "mongoose";

function validatorCpf(cpf) {
    return cpf.length > 10 && cpf.length < 12;
}

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        cpf: {type: String, validate: [validatorCpf, "este campo deve conter 11 caracteres."] , required: true},
        birthDate: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        address: {type: String, required: true},
        number: {type: String, required: true},
        complement: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        country: {type: String, required: true},
        zipCode: {type: String, required: true} 
    }
);

const users = mongoose.model("users", userSchema);

export default users;