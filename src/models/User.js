import mongoose from "mongoose";
import mongooseDateFormat from "mongoose-date-format";

function validatorCpf(cpf) {
    return cpf.length == 11;
}

const validatorBirthDate = (bday) => {
    let birthDate = new Date(bday);
    let today = new Date();
    let year = today - birthDate;
    let age = Math.floor(year/31557600000);
    return age > 17;
}

function validatorPassword(pass) {
    return pass.length > 5;
}

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        cpf: {type: String, validate: [validatorCpf, "this field must contain 11 characters."], required: true},
        birthDate: {type: Date, required: true, validate: [validatorBirthDate, "date of birth must be more than 18 years."]},
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

userSchema.plugin(mongooseDateFormat);
const users = mongoose.model("users", userSchema);

export default users;