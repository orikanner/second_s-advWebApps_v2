import styled from 'styled-components';
import { useRef } from 'react';
export default function CartForm() {
  const name = useRef();
  const address = useRef();

  
  //  const handleSubmit = async (e)=> { // diff s
    async function handleSubmit(e){
    e.preventDefault();  
    console.log("-form");
       try{
        const user = {name:name.current.value, address:address.current.value};
        await fetch("http://localhost:5000/cart/userDetailsForm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });
          
       }catch(err){
        console.error("cant send form");
       } 
    }



    return (
    <>
        <br></br>
      <form onSubmit={e=>handleSubmit(e)}>
        <label>
          Full Name:
          <input type="text" name="name" ref={name} />
        </label>
        <br/><br/>
        <label>
          Addresssss:
          <input type="text" name="address" ref={address} />
        </label>
        <br/><br/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
