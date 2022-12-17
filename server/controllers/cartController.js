const { use } = require("../routes/productRoute");
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
        const user = req.body;
        const { name , address, email, city, cart, total, totalCartItems} = req.body;
       // console.log(total);
        cartService.serviceAddUser(name, address, email, city, cart, total,totalCartItems);
//        cartService.serviceAddUser(JSON.parse(user));
        res.status(200).json({user: req.body});
    }catch(err){
        console.log("failed in controller :",err);
        res.status(500).json({message:"wrong input"});
    }
    
}

