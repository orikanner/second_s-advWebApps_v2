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
import CartComp from "./cart/CartComp";


function App() {


  const backendData = useBackendData();
  var currCart=[];
 

    const [cartData, setCartData]= React.useState(currCart);
    const [itemCount, setItemCount] = React.useState(currCart.length); 
  
    useEffect(()=>{
      console.log("cuurcart",currCart);
      setCartData(cartData);
     
      
  },[cartData])

  
  return (
    <>
      <Router>
        <PageHeader itemCount={itemCount}/>
        <Routes>
          <Route
            path="/"
            element={<ProductsList productsList={backendData} isAdder={true}/>}
          />
          <Route
            path="/product/:name"
            element={<ProductPage productsList={backendData}/>}
          />
          <Route
            path="/cart/MyCart"
            element={<CartComp/>}
          />
          <Route path="*" element={<p>page not found...</p>} />
        </Routes>
        <p>&copy; Ori and Nimi 2022</p>
      </Router>
    </>
  );
}

export default App;
