const validator = require('validator')

const validatesignupdata = (req)=>{
  const {firstName, lastName, email, password, age, gender} = req.body;
  //one by one validate everything
  if(!firstName || !lastName)
    throw new Error("Name is not valid");
else if (firstName.length<10 || firstName.length>25){
    throw new Error("Firstname should be 10 to 25 chars");
}
else if(!validator.isEmail(email)){
    throw new Error ("email is not valid");
}
else if(!validator.isStrongPassword(password)){
    throw new Error ("password is not strong");
}
};
