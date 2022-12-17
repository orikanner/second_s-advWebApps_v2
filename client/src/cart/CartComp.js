import { useSelector, useDispatch } from "react-redux";//selector- reading , dispatch -ex
import React from "react";
import Product from "../product/Product";
import CartForm from "./CartForm";
import CartObjComponent from "./CartObjComponent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MyTitle } from "../publicDesign";


export default function () {
  const items = useSelector((store) => store.cart.items);
  var cartTitleH2 = (items.length ==0)?"Your Cart Is Empty" :"My Cart"
  const isAdder = false;
  const cartCss = "";
  var count=0;
  return (
    <>
    
      <h2 className="myCartTitle">{cartTitleH2}</h2>
      
    <Container>
      <Row xs={3}>
      {items.map((product) => {
        
        return (
          <>
          <Col sm={6} md={4} className='mt-3'>
          <CartObjComponent key={Math.random(2)} {...{ product, isAdder, cartCss }} />
          </Col>
          </>
        );
      })}
        </Row>
      </Container>
      <CartForm />
    </>
  );
}
