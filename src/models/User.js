import mongoose from "mongoose";

function validatorCpf(cpf) {
    return cpf.length > 10 && cpf.length < 12;
}

function validatorPassword(pass) {
    return pass.length > 5;
}

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        cpf: {type: String, validate: [validatorCpf, "this field must contain 11 characters."], required: true},
        birthDate: {type: Date, max: "09/08/2004", required: true},
        email: {type: String, validate: /\S+@\S+\.\S+/, required: true},
        password: {type: String, validate: [validatorPassword, "this field must contain at least 6 digits."], required: true},
        address: {type: String, required: true},
        number: {type: String, required: true},
        complement: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        country: {type: String, required: true},
        zipCode: {type: Number, required: true} 
    }
);

const users = mongoose.model("users", userSchema);

export default users;