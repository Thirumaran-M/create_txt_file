import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim:true,
//        unique:true
    },
    user:{
        type: ObjectId,
        ref:"user"
    }
})

const users = mongoose.model("users",userSchema);
export {users};