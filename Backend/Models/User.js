import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true 
    },
    email:{
        type :String ,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    blogs: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Blog",
          required: true,
        }
      ],
})