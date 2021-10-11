import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import CurrencyFormat from "react-currency-format";
import styled from "styled-components";
import { useGlobalContext } from "./context";
const CartItem = () => {
  const { cart, remove, toggleAmount } = useGlobalContext();
  return (
    <div>
      {cart.map((item) => {
        const { _id, qty, name, image, price } = item;
        return (
          <CartItemBody key={_id}>
            <img src={image} alt={name} />
            <CartItemContent>
              <h4
                style={{
                  textTransform: "capitalize",
                }}
              >
                {name}
              </h4>
              <CurrencyFormat
                renderText={(value) => (
                  <h6
                    style={{
                      opacity: ".8",
                    }}
                  >
                    {value}
                  </h6>
                )}
                decimalScale={2}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"N"}
              />
              <button
                onClick={() => {
                  remove(_id, price, qty);
                }}
                style={{
                  color: "red",
                  fontWeight: "bold",
                  border: "none",
                  background: "transparent",
                  padding: " 1em",
                }}
              >
                remove
              </button>
              <Toggle>
                <FaCaretUp onClick={() => toggleAmount(_id, "inc")} />
                {qty}
                <FaCaretDown onClick={() => toggleAmount(_id, "dec")} />
              </Toggle>
            </CartItemContent>
          </CartItemBody>
        );
      })}
    </div>
  );
};

const CartItemBody = styled.section`
  position: relative;
  top: 5em;
  display: flex;
  margin-bottom: 3em;
  align-items: center;
  margin-left: 4em;
  & img {
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: -8em;
  }
`;

const Toggle = styled.section`
  position: relative;
  top: -2.5em;
  left: 13em;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
  @media only screen and (max-width: 600px) {
    position: relative;
    top: -5em;
    left: 12em;
  }
`;
const CartItemContent = styled.section``;

export default CartItem;
