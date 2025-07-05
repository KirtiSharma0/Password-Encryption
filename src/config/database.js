const mongoose = require('mongoose')
const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://kirtisharma5758:Connectmongo@cluster0.ucivzw4.mongodb.net/")
};

module.exports = connectDB;