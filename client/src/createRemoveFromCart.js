export const createRemoveFromCart =
  (setItemCount, itemCount, setCartData) => async (product) => {
    try {
      const currCart = [];

      JSON.parse(localStorage.getItem("Cart")).forEach((element) => {
        currCart.push(element);
      });
      var index = currCart.findIndex(obj => obj.name === product.name)
      console.log("\nIndex of is: " + index + "\n The product is: " + JSON.stringify(product.name));
      currCart.splice(index, 1);
      localStorage.setItem("Cart", JSON.stringify(currCart));
      setItemCount(currCart.length);
      setCartData(currCart);
    } catch (err) {
      console.error(err);
    }
  };
