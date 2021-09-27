import React from "react";

import Submenu from "../Submenu";
import CartContainer from "../CartContainer";
import { useGlobalContext } from "../context";
const Cart = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="my-cart">
      <Submenu />
      <CartContainer />
    </div>
  );
};

export default Cart;
