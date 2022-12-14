import React from 'react'
import { useSelector } from 'react-redux'
import Product from './product/Product'


export default function ProductsList({productsList, isAdder ,cartCss}={cartCss:""}) {
 
  //// const productList = useSelector(store => store.backendData);
  if (!productsList) return <p>loading...</p>
    
    return (
   
      productsList.map(product => {
        return <Product key={product.name} {...{product, isAdder, cartCss}}/>
         
        } )
       
    )
  
}
