import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * connect to mongoDB
 */
let connectDB = ()=> {
    mongoose.Promise = bluebird;

    let DB_CONNECTION = "mongodb";
    let DB_HOST = "localhost";
    let DB_NAME = "simple_chat";
    let DB_PORT = 27017;
    let DB_USERNAME = "";
    let DB_PASSWORD = "";

    let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    // process.env : ung dung bien moi truong vao viec quan ly db
    // mongodb://localhost:27017/simple_chat

    return mongoose.connect(URI,{ useNewUrlParser: true },{ useUnifiedTopology: true });
     
}

module.exports = connectDB;