const express = require('express');
const app = express();
app.use(express.json());

//connecting database
const connectDB = require("./config/database")

//put values of userobject in database attributes
const User = require("./models/user")

//creating api for userschema input database
app.post("/signup" , async(req,res) => {
//validation of data

//encrypt password

//creating new instance of user model
})

//creating a new instance of user model
const data = req.body;
const user = new User(data);
await user.save();
res.send("user added succefully")

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