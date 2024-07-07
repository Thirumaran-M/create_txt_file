import mongoose, { ObjectId } from "mongoose";

const postSchema = new mongoose.Schema({
    companyName:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    question:{
        type: Array,
        required: true
    },
    user:{
        type: ObjectId,
        ref:"user"
    }
});

const posts = mongoose.model("posts",postSchema);
export {ports};