export const createRemoveFromCart =
  (setItemCount, itemCount, setCartData) => async (product) => {
    try {
      const currCart = [];

      JSON.parse(localStorage.getItem("Cart")).forEach((element) => {
        currCart.push(element);
      });
      const index = currCart.indexOf(product);
      currCart.splice(index, 1);

      localStorage.setItem("Cart", JSON.stringify(currCart));
      setItemCount(currCart.length);
      setCartData(currCart);
    } catch (err) {
      console.error("failed To add to cart");
    }
  };
