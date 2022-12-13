const mongoose = require("mongoose");
const productSchema = require('./Product').schema;

const user = new mongoose.Schema({
    name:{type: String, required :'true'},
    email:{type:String, require:'true'},
    city:{type:String, require:'true'},
    adderss: {type: String,required:'true'},
    cart :{
            type:[productSchema] ,require:'undefined'
          }
    
})

module.exports = mongoose.model("user",user);