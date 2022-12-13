import styled from "styled-components";

export const MyTitle = styled.h1.attrs({className: 'MyTitle'})`
  font-family: "Courier New", Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items:center;

`
export const MyLink = styled.span`
  margin: 1rem;
  font-family: "Courier New", Courier, monospace;
`;

export const LinksBox = styled.nav`
  margin:1rem;
  height: 50px;
  width:auto;
  display: flex;
  align-items:center;
  position: relative;
  padding: 0.004rem 0.5rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  justify-content:space-between
`;