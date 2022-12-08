import React from "react";
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


function App() {
  const addToCartString = "Add To Cart";
  const RemoveFromCartString = "Remove From Cart";

  const backendData = useBackendData();

  const [itemCount, setItemCount] = React.useState(0); 
  

  

  const onAddToCart = createAddToCart(setItemCount, itemCount);
  const onRemoveFromCart = createRemoveFromCart(setItemCount,itemCount);
  
  return (
    <>
      <Router>
        <PageHeader itemCount={itemCount}/>
        <Routes>
          <Route
            path="/"
            element={<ProductsList productsList={backendData} handler={onAddToCart} btnContent={addToCartString}/>}
          />
          <Route
            path="/product/:name"
            element={<ProductPage productsList={backendData}/>}
          />
          <Route
            path="/cart/MyCart"
            element={<ProductsList  productsList={backendData} handler={onRemoveFromCart}btnContent={RemoveFromCartString}/>}
          />
          <Route path="*" element={<p>page not found...</p>} />
        </Routes>
        <p>&copy; Ori Kanner 2022</p>
      </Router>
    </>
  );
}

export default App;
// thanks :__)