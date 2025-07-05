const mongoose = require('mongoose')
const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://kirtisharma5758:q3DsNGyHjWxHdcPl@password.wynsubh.mongodb.net/")
};

module.exports = connectDB;

//password  q3DsNGyHjWxHdcPl
//step1 create project in mongodb
//step2 free cluster, get name and password of database
//step3 choose compass
//step4 copy url of mongodb and paste in database.js
//step5 open compass and add connection
//step6 paste url in compass
//step7 save connect and get data in local folder