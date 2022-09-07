import mongoose from "mongoose";

function validatorCpf(cpf) {
    return cpf.length > 10 && cpf.length < 12;
}

function validatorSenha(senha) {
    return senha.length > 5;
}

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        cpf: {type: String, validate: [validatorCpf, "este campo deve conter 11 caracteres."], required: true},
        birthDate: {type: String, required: true},
        email: {type: String, validate: /\S+@\S+\.\S+/, required: true},
        password: {type: String, validate: [validatorSenha, "este campo deve conter no mínimo 6 dígitos."], required: true},
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