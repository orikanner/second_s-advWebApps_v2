export const createAddToCart = (setItemCount, itemCount) => async (Product) => {
  // need to do something with this product
  setItemCount(itemCount + 1);
  try {

    const respone = await fetch("http://localhost:5000/cart/addToCart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Product),
    });
    if (respone.ok){}
      //setItemCount(itemCount + 1);
    // if (respone.ok) setItemCount((curr) => curr + 1);
  } catch (err) {
    
    console.error("failed:", err.message);
  }
};
