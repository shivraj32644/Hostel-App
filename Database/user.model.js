import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    user_type: {
        type:String,
    },
    email: {
        type: String,
        require:true
    },
    password: {
        type: String,
        require:true
    },
    favorite: [String],
    booked:[String]
})

export const userModel = mongoose.model("users",userSchema)