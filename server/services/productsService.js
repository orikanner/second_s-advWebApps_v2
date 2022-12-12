const product = require("../models/Product");
async function getAllProducts(){
    
    var products=[];
    
        products = await product.find();
        console.log("in productService", products);

  
    return products;
}















module.exports = {getAllProducts}