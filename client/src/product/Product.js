import React , {useEffect,useState} from 'react'
import {  Link } from "react-router-dom";
import styled from 'styled-components';
import { ProductBox } from './ProductStyle';


const Header = styled.span`
  font-size: 1.5rem;
`

export default function Product({product, handler , btnContent}) {  
 

  return (
    <ProductBox>
      <p>
         <Link to={product.pageLink}><><Header>{product.name}</Header></> </Link> <br/><br></br>
          - {product.price}$ - 
           <br/><br/>
          <button onClick={() => handler(product)}>{btnContent}</button>
          {/* <button onClick={(btnContent === "Add To Cart")? ()=>OnAddToCart(product)}></button> */}
      </p>
      <img src={product.img}></img>
    </ProductBox>
  )
}
