const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name:{type: String, required :'true'},
    adderss: {type: String,required:'true'}
})

module.exports = mongoose.model("user",user);