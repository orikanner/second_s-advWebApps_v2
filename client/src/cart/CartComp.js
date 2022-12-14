import { useSelector, useDispatch } from "react-redux";//selector- reading , dispatch -ex
import React from "react";
import Product from "../product/Product";
import CartForm from "./CartForm";

export default function () {
  const items = useSelector((store) => store.cart.items);

  const isAdder = false;
  const cartCss = "";

  return (
    <>
      {items.map((product) => {
        return (
          <Product key={product.name} {...{ product, isAdder, cartCss }} />
        );
      })}
      <CartForm />
    </>
  );
}
