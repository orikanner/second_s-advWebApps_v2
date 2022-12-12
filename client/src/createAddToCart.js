export const createAddToCart = (setItemCount, itemCount,setCartData) => async (Product) => {
  // need to do something with this product
  // setItemCount(itemCount + 1);
  try {
    const currCart = [];
    if (!JSON.parse(localStorage.getItem("Cart")))
      localStorage.setItem("Cart", currCart);
    else{
      JSON.parse(localStorage.getItem("Cart")).forEach(element => {
        currCart.push(element);
      });
    }
    currCart.push(Product);
    localStorage.setItem("Cart",JSON.stringify(currCart));
    setItemCount(currCart.length);
    setCartData(currCart);
    
  } catch(err){
      console.error("failed To add to cart")
  };
}















// export const createAddToCart = (setItemCount, itemCount) => async (Product) => {
//   // need to do something with this product
//   // setItemCount(itemCount + 1);
//   try {

//     const response = await fetch("http://localhost:5000/cart/addToCart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(Product),
//     });
//     if (response.ok){}
//       setItemCount(itemCount + 1);
//     // if (respone.ok) setItemCount((curr) => curr + 1);
//   } catch (err) {
    
//     console.error("failed:", err.message);
//   }
// };
