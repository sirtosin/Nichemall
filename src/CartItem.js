import React from "react";
import CurrencyFormat from "react-currency-format";
import Typography from "@mui/material/Typography";

import styled from "styled-components";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useGlobalContext } from "./context";
import { fontWeight } from "@mui/system";
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
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                {name}
              </Typography>
              <CurrencyFormat
                renderText={(value) => (
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      opacity: ".8",
                    }}
                  >
                    {value}
                  </Typography>
                )}
                decimalScale={2}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"N"}
              />
              <Button
                onClick={() => {
                  remove(_id, price, qty);
                }}
                sx={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                remove
              </Button>
              <Toggle>
                <ArrowUpwardIcon onClick={() => toggleAmount(_id, "inc")} />
                {qty}
                <ArrowDownwardIcon onClick={() => toggleAmount(_id, "dec")} />
              </Toggle>
            </CartItemContent>
          </CartItemBody>
        );
      })}
    </div>
  );
};

const CartItemBody = styled.div`
  display: flex;
  margin-top: 3em;
  align-items: center;
  margin-left: 4em;
  & img {
    width: 200px;
    height: 200px;
  }
`;

const Toggle = styled.div`
  position: relative;
  top: -7em;
  left: 30em;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
`;
const CartItemContent = styled.div``;

export default CartItem;
