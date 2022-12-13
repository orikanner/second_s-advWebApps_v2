import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Form,
  useParams,
} from "react-router-dom";
import ProductsList from "./ProductsList";
import ProductPage from "./productPage/ProductPage";
import { useBackendData } from "./useBackendData";
import { PageHeader } from "./PageHeader";
import { createAddToCart } from "./createAddToCart";
import { createRemoveFromCart } from "./createRemoveFromCart";
import CartForm from "./cart/CartForm";


function App() {


  const backendData = useBackendData();
  var currCart=[];
  
  // useEffect(()=>{
    //  currCart=[];
    JSON.parse(localStorage.getItem("Cart"))?.forEach(element => {
      currCart.push(element)})
  // },[])
  
  
 
  
 

    const [cartData, setCartData]= React.useState(currCart);
    const [itemCount, setItemCount] = React.useState(currCart.length); 
  
    useEffect(()=>{
      console.log("cuurcart",currCart);
      setCartData(cartData);
     
      
  },[cartData])

  

  const onAddToCart = createAddToCart(setItemCount, itemCount,setCartData,backendData);
  const onRemoveFromCart = createRemoveFromCart(setItemCount,itemCount,setCartData,backendData);
  
  return (
    <>
      <Router>
        <PageHeader itemCount={itemCount}/>
        <Routes>
          <Route
            path="/"
            element={<ProductsList productsList={backendData} handler={onAddToCart} btnContent={"Add To Cart"}/>}
          />
          <Route
            path="/product/:name"
            element={<ProductPage productsList={backendData}/>}
          />
          <Route
            path="/cart/MyCart"
            element={<>
              <ProductsList  productsList={cartData} handler={onRemoveFromCart}btnContent={"Remove From Cart"} cartCss={"cartCards"}/>
              <CartForm></CartForm>
            </>}
          />
          <Route path="*" element={<p>page not found...</p>} />
        </Routes>
        <p>&copy; Ori and Nimi 2022</p>
      </Router>
    </>
  );
}

export default App;
