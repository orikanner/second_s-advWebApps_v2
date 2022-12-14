import styled from "styled-components";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";

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
  const cart = useSelector((store)=>store.cart);

  const Name = useRef();
  const Address = useRef();
  const Email = useRef();
  const City = useRef();

  

  //  const handleSubmit = async (e)=> { // diff s
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("-form");
    try {
      const LSCart = cart.items;
   
      const user = {
        name: Name.current.value,
        address: Address.current.value,
        email: Email.current.value,
        city: City.current.address,
        Cart: LSCart,
        total: cart.totalPrice,
      };

      await fetch("http://localhost:5000/cart/userDetailsForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      localStorage.clear();
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
    </>
  );
}
