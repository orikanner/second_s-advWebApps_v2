import React from 'react'
import Product from './product/Product'

export default function ProductsList({productsList ,handler, btnContent}) {
  //console.log("from ProductsLittComp",productsList);
  
  // if(btnContent === "Add To Cart")

  if (!productsList) return <p>loading...</p>
  
    return (
   
      productsList.map(pr => {
        return <Product key={pr.name}  product ={pr} handler = {handler}  btnContent ={btnContent}/>
         
        } )
       
    )
  
}
