import styled from 'styled-components';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';




export default function CartForm() {
  const FormBorder = styled.div`
  
    width:90%;
    border-width: 4px;
    border-color: black;
    box-shadow: 0 1.75px 1.75px 1.75px rgba(9, 9, 9, 0.23);
    margin:3rem;
    width:auto;
  padding: 0.004rem 0.5rem;
  background-color: #fff;
  color: black;
  padding: 4%;
  
    Button{
      align-content:center;
    }
    `
  


  const Name = useRef();
  const Address = useRef();
  const Email = useRef();
  const City = useRef();



  
  //  const handleSubmit = async (e)=> { // diff s
    async function handleSubmit(e){
    e.preventDefault();  
    console.log("-form");
       try{
        const LSCart =[];
        JSON.parse(localStorage.getItem("Cart")).forEach(element => {
          LSCart.push(element);
        });
        const user = {name: Name.current.value,
                      address:Address.current.value,
                      email: Email.current.value,
                      city: City.current.address,
                      Cart: LSCart};

        await fetch("http://localhost:5000/cart/userDetailsForm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });
          localStorage.clear();
          
       }catch(err){
        console.error("cant send form");
       } 
    }



    return (
    <>
        <br></br>
     
      <FormBorder>
      <Form onSubmit={e=>handleSubmit(e)}>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputEmail4">Full Name</label>
      <input type="text" class="form-control" id="inputFullName" placeholder="Full Name" ref={Name}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" ref={Email}/>
    </div>
  
  </div>


  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" ref={City}/>
    </div>
    <div class="form-group col-md-6">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" ref={Address} />
  </div>
  </div>
      <br></br>
  <div>
      <Button type="submit" class="btn btn-primary">Place Order</Button>
  </div>
    
</Form>
</FormBorder>

    </>
  );
}
