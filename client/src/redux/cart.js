import { createSlice } from '@reduxjs/toolkit';

const savedState = JSON.parse(localStorage.getItem("cart") || "{}");

const slice = createSlice({
  name: 'cart',
  initialState: {
    items: savedState.items || [],//{pr:{},count:0}
    totalPrice: savedState.totalPrice || 0,
    totalProductsCount:savedState.totalProductsCount || 0
  },

  reducers: {
    addProduct: (state, { payload: product }) => {
     console.log("in remove product we get pr in this format: ", product);
     var isExist = false;
      state.items?.forEach(element => (element.pr.name == product.name)? isExist =true : console.log() ); //(isExist?break:
      if(!isExist){
      state.items.push({pr:product, count:1});
      
      }
      else{ //already exists
        state.items.find(element => element.pr.name == product.name).count ++;
      }
        state.totalPrice += product.price;
        state.totalProductsCount ++;
        // todo update local storage 
        localStorage.setItem("cart",JSON.stringify(state));
    },
    removeProduct: (state, { payload: product }) => {
        console.log("in remove product we get pr in this format: ", product);
        const thisProduct = state.items.find(element => element.pr.name === product.pr.name);
         
        if (!thisProduct) {
            console.warn("asked to remove nonexisting product");
            return;
        }
        state.items.find(element => element.pr.name === product.pr.name).count--;
        if(thisProduct.count === 0){
          console.log(":count =1");
          
          state.items.splice(state.items.indexOf(thisProduct),1); // indexOf(product) doesnt work
        }
        
        state.totalPrice -= thisProduct.pr.price;
        state.totalProductsCount --;
        // todo update local storage
        localStorage.setItem("cart",JSON.stringify(state));
    }
  },
});

export const { addProduct, removeProduct } = slice.actions;
export default slice.reducer;
