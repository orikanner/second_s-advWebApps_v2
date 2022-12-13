const user = require("../models/User");

async function serviceAddUser(name, address, email, city, cart){
    const newUser = new user ({ name:name,
                                adderss:address,
                                email: email,
                                city: city,
                                cart:cart
                              });
    await newUser.save();
}
module.exports ={serviceAddUser};


