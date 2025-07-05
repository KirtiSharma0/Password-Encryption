const mongoose = require('mongoose')

//creating user schema
const userSchema = mongoose.Schema({
    firstName : {
        type: String,
        required: true,  //validation data mandotory
        minlength:10,
        maxlength:25
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true, //validation
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Invalid gender");
            }
        }
    }
});

//now we create mongoose model
module.exports = mongoose.model("User" , userSchema)