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
    //name: Name.current.value,
    // address:Address.current.value,
    // email: Email.current.value,
    // city: City.current.address,
    // Cart: LSCart};
    try{
        const { name, address, email, city, cart , total } = req.body;
        console.log(total);
        cartService.serviceAddUser(name, address, email, city, cart, total);
        res.end();
    }catch(err){
        console.log("failed in controller :",err);
    }
    
}

