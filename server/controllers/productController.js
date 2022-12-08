
exports.getAllProducts =(req,res) =>{
   //{"products":
    res.json(
    [
        {
          "name": "Hamburger",
          "price": 25,
          "img": "https://cdn.cnn.com/cnnnext/dam/assets/220428140436-04-classic-american-hamburgers-full-169.jpg",
          "secondImg":"https://img.freepik.com/premium-psd/3d-render-hamburger-disassemble-transparent-background_252008-1597.jpg?auto=format&h=200",
          "description": "A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll." ,
          "location": "Burger House restaurant",
          "pageLink" :"/product/Hamburger"
    
        },
        {
          "name": "Steak",
          "price": 50,
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_pGiUfE_dV1Cg12umBSUYch1XrO-nsh4Fg&usqp=CAU",
          "secondImg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJiCUF9enp49QFJag-fwdfwkmGfaBpHxUDg&usqp=CAU",
          "description": "A steak is a thick cut of meat generally sliced across the muscle fibers, sometimes including a bone. It is normally grilled or fried. Steak can be diced, cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers.",
          "location": "Hudson SteakHouse",
          "pageLink":"/product/Steak"
        },
        {
          "name": "Pizza",
          "price": 15,
          "img": "https://kirstys.co.uk/wp-content/uploads/2022/03/Margherita_pizza_lifestyle1-200x200.png",
          "secondImg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncb4QlYPiIEWRTNof87oJ0ByLhxuQkFVZvSc8bFpiqx_zXC86T8n7aPcnNHP9xh9Zjao&usqp=CAU",
          "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other  ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.",
          "location": "Pizza Teresa",
          "pageLink":"/product/Pizza"
        }
      ])
    
    //console.log("getAllProduts from product controller")
    
}
