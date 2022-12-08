import React from "react";
import { Link } from "react-router-dom";
import { MyLink, MyTitle, LinksBox } from "./publicDesign";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export function PageHeader({ itemCount }) {
  return (
    <>
      <MyTitle>Check Out Our Menu</MyTitle>
      <LinksBox>
        <Link to="/">
          <>
            <MyLink>Menu</MyLink>
          </>
        </Link>
        <Link to="/cart/MyCart">
          <Badge overlap="rectangular" color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </LinksBox>
    </>
  );
}
