const user = require("../models/User");

async function serviceAddUser(name, address, email, city, cart, total, totalCartItems){
    console.log(total);  
  const newUser = new user ({ name:name,
                                adderss:address,
                                email: email,
                                city: city,
                                cart:cart,
                                total : total,
                                totalProductsCount : totalCartItems
                              });
    await newUser.save();

  }

module.exports ={serviceAddUser};


