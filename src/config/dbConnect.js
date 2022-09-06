import mongoose from "mongoose";

mongoose.connect("mongodb+srv://compass:123compass@compass.kjmfcqy.mongodb.net/compass-node");

let db = mongoose.connection;

export default db;