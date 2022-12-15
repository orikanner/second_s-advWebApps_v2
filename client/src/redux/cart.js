import { createSlice } from '@reduxjs/toolkit';

const savedState = JSON.parse(localStorage.getItem("cart") || "{}");

const slice = createSlice({
  name: 'cart',
  initialState: {
    items: savedState.items || [],
    totalPrice: savedState.totalPrice || 0,
  },

  reducers: {
    addProduct: (state, { payload: product }) => {
        state.items.push(product);
        state.totalPrice += product.price;
        // todo update local storage 
        localStorage.setItem("cart",JSON.stringify(state));
    },
    removeProduct: (state, { payload: itemId }) => {
        console.log("cart red ", itemId);
        const product = state.items.find(pr => pr._id == itemId);

        if (!product) {
            console.warn("asked to remove nonexisting product");
            return;
        }

        state.items.splice(state.items.indexOf(product), 1)
        state.totalPrice -= product.price;
        // todo update local storage
        localStorage.setItem("cart",JSON.stringify(state));
    }
  },
});

export const { addProduct, removeProduct } = slice.actions;
export default slice.reducer;
