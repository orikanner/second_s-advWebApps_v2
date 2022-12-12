const user = require("../models/User");

async function serviceAddUser(userName,address){
    const newUser = new user ({name:userName,adderss:address});
    await newUser.save();
}
module.exports ={serviceAddUser};