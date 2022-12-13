export const createRemoveFromCart =
  (setItemCount, itemCount, setCartData) => async (product) => {
    try {
      const currCart = [];

      JSON.parse(localStorage.getItem("Cart")).forEach((element) => {
        currCart.push(element);
      });
      var index = currCart.find(pr=> pr.name === product.name);
      console.log("\nIndex of is: " + index + "\n The product is: " + JSON.stringify(product.name));
      currCart.splice(index, 1);
      localStorage.clear("cart");
      localStorage.setItem("Cart", JSON.stringify(currCart));
      setItemCount(currCart.length);
      setCartData(currCart);
    } catch (err) {
      console.error(err);
    }
  };
