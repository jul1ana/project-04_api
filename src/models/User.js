import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        city: {type: String, required: true},
        country: {type: String, required: true},
        number: {type: Number}
    }
);

const users = mongoose.model("users", userSchema);

export default users;