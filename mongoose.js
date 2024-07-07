import mongoose from "mongoose"

const MongoURL = "mongodb://127.0.0.1:27017";

export function dbConnection(){
    const params = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try{
        mongoose.connect(MongoURL);
        console.log("Databse connected successfully!");
    }catch(error){
        console.log("Databse not connected!");
    }
}

dbConnection();