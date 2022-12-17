import styled from "styled-components";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import OrderCompleteModal from "./OrderCompleteModal";
import CartObjComponent from "./CartObjComponent";
import { useState } from "react";

const FormBorder = styled.div`
  width: 90%;
  border-width: 4px;
  border-color: black;
  box-shadow: 0 1.75px 1.75px 1.75px rgba(9, 9, 9, 0.23);
  margin: 3rem;
  width: auto;
  padding: 0.004rem 0.5rem;
  background-color: #fff;
  color: black;
  padding: 4%;
  
  Button {
    align-content: center;
  }
`;

export default function CartForm() {
  const cart = useSelector((store)=>store.cart); //to read from curr values in redux

  const[topModal,setTopModal] =useState(false);

  const Name = useRef();
  const Address = useRef();
  const Email = useRef();
  const City = useRef();
  
  // function  toggleModal(){
  //   this.setState({ showModal: !this.state.showModal });
  // } 

 
  

  //  const handleSubmit = async (e)=> { // diff s
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("-form");
    try {
      const LSCart = cart.items;
      if(cart.totalPrice == 0){return null}// can add modal here
      const user = {
        name: Name.current.value,
        address: Address.current.value,
        email: Email.current.value,
        city: City.current.address,
        Cart: LSCart,
        total: cart.totalPrice,
        totalCartItems : cart.totalProductsCount
      };

      const fetchReq = await fetch("http://localhost:5000/cart/userDetailsForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        
      }).then(()=> setTopModal(true)).error((e)=>setTopModal(false));
      
      localStorage.clear();
      
      




      //return(<OrderCompleteModal topModal= {topModal}></OrderCompleteModal>)
      // toggleModal();
      //document.location.reload();
      // Name.current.value("");
      // Address.current.value("");
      // Email.current.value("");
      // City.current.value("");
      // e.target.reset();
    
      
    } catch (err) {
      console.error("cant send form");
    }
  }

  return (
    <>
      <br></br>

      <FormBorder>
        <h3>Your Total Is : {cart.totalPrice} $</h3>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="inputFullName"
                placeholder="Full Name"
                ref={Name}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                ref={Email}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                ref={City}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                ref={Address}
              />
            </div>
          </div>
          <br></br>
          <div>
            <Button type="submit" className="btn btn-primary">
              Place Order
            </Button>
          </div>
        </Form>
      </FormBorder>
       <OrderCompleteModal toggleModal={setTopModal} topModal={topModal}></OrderCompleteModal>
    </>
  );
}
