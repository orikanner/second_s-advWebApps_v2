import React , {useEffect,useState} from 'react'
import {  Link } from "react-router-dom";
import styled from 'styled-components';
import { ProductBox } from './ProductStyle';
import '../cart/cart.css'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../redux/cart'

const Header = styled.span`
  font-size: 1.5rem;
`

export default function Product({product,cartCss, isAdder}) {  
 
  const dispath = useDispatch();//
  const btnContent = isAdder? "Add to Cart" : "Remove from Cart";
  const handler = isAdder 
    ? () => dispath(addProduct(product))
    : () => {dispath(removeProduct(product._id))
    };

  return (
    <ProductBox special={!isAdder}> 
    
      <p>
         <Link to={"/product/"+product.name}><><Header>{product.name}</Header></> </Link> <br/><br></br>
          - {product.price}$ - 
           <br/><br/>
          <button onClick={handler}>{btnContent}</button>
          {/* <button onClick={(btnContent === "Add To Cart")? ()=>OnAddToCart(product)}></button> */}
      </p>
      <img src={product.img}></img>
     
   </ProductBox>
  )
}
