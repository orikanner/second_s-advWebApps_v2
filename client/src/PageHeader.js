import React from "react";
import { Link } from "react-router-dom";
import { MyLink, MyTitle, LinksBox } from "./publicDesign";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

export function PageHeader() {
  const cart = useSelector(store => store.cart);

  return (
    <>
      <MyTitle>Check Out Our Menu</MyTitle>
      <LinksBox>
        <Link to="/">
          <>
            <MyLink >Menu</MyLink>
          </>
        </Link>
        <Link to="/cart/MyCart">
          <Badge overlap="rectangular" color="secondary" badgeContent={cart.items.length}>
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </LinksBox>
    </>
  );
}
