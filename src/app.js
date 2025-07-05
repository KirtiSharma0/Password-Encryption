const express = require('express');
const app = express();
app.use(express.json());

const bcrypt = require("bcrypt")    //importing bcrypt
const connectDB = require("./config/database")   //connecting database importing
const {validatesignupdata} = require("./utils/validation") //importing validation data
const User = require("./models/user")           //put values of userobject in database attributes importing

//creating api for userschema input database
app.post("/login" , async(req,res) => {
    try{
//validation of data in utils
validatesignupdata(req);
const {firstName,lastName,email,password} = req.body;  //calling from user

//encrypt password
const passwordHash = bcrypt.hash(password,10);
console.log(passwordHash);

//creating new instance of user model
 const user = new User({
     firstName,
     lastName,
     email,
     password:passwordHash,   //passing fields
 });
await user.save();
res.send("user added succefully");
    }
catch(err){
    res.status(400).send("ERROR:" + err.message);
}
})
 
connectDB()
.then(()=>{
    console.log("database connected");
})
.catch(err=>{
    console.log("database not found");
})

app.listen(3000 , ()=>{
    console.log("server has been started successfully")
});