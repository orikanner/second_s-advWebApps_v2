const cartService = require("../services/cartService");
exports.getAllCartProducts =(req,res) =>{
    // res.status(200).json({
    //     success : true,
    //     message : "this route will show all product in db"
    // })
    //console.log("getAllcart from cart controller")
}
exports.addToCart = (req,res) => {
    
}

exports.userForm = (req,res) => {
    
    try{
        const { name, address } = req.body
        cartService.serviceAddUser(name,address);
        res.end();
    }catch(err){
        console.log("failed in controller :",err);
    }
    
}

