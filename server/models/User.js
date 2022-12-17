const mongoose = require("mongoose");
const productSchema = require('./Product').schema;

const user = new mongoose.Schema({
    name:{type: String, required :'true'},
    email:{type:String, require:'true'},
    city:{type:String, require:'true'},
    adderss: {type: String,required:'true'},
    cart :[{
            product:productSchema ,
             count:{type:Number,required:'true'}      // new
         }],
    totalProductsCount:{type:Number, require:'true'}, // new
    total : {type: Number , require:'true'}
    
      
})

module.exports = mongoose.model("user",user);