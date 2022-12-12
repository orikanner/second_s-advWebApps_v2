const product = require("../models/Product");
async function getAllProducts(){
    
    var products=[];
    
        products = await product.find();
        

  
    return products;
}















module.exports = {getAllProducts}