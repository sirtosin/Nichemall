import React from "react";
import CurrencyFormat from "react-currency-format";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import styled from "styled-components";

const CartContainer = () => {
  const { cart, user, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    console.log(cart);
    return (
      <header>
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Cart item
        </h3>
        <h3
          style={{
            textAlign: "center",
          }}
        >
          is currently empty
        </h3>
      </header>
    );
  }
  return (
    <Container>
      <h2 style={{}}>your items</h2>
      <CartFooter>
        <CartItem />;
        <CurrencyFormat
          renderText={(value) => (
            <h4
              style={{
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              total: {value}
            </h4>
          )}
          decimalScale={2}
          value={total}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"N"}
        />
        <hr />
        <footer>
          <button
            style={{
              marginLeft: "30em",
              marginBottom: "2em",
              marginTop: "2em",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              padding: " 1em 4em",
              borderRadius: "2.3rem",
              background:
                "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
            }}
            onClick={clearCart}
          >
            {" "}
            <img src="images/cleaning_services_black_24dp.svg" />
            clear cart
          </button>
          <Link to={user ? "/checkout" : "/cart"}>
            <button
              style={{
                marginLeft: "10em",
                marginTop: "2em",
                marginBottom: "2em",

                color: "white",
                padding: " 1em 4em",
                borderRadius: "2.3rem",
                background:
                  "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
              }}
              className="checkout"
            >
              {user ? "checkout" : "sign in to checkout"}
            </button>
          </Link>
        </footer>
      </CartFooter>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  h2 {
    position: relative;
    top: 3em;
    text-align: center;
    margin-bottom: 1em;
    text-transform: capitalize;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      position: relative;
      top: 1em;
    }
  }
  @media only screen and (max-width: 600px) {
    h2 {
      position: relative;
      top: 1em;
    }
  }
`;

const CartFooter = styled.section`
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    footer {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      left: -13em;
    }
  }
  @media only screen and (max-width: 768px) {
    footer {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      left: -13em;
    }
  }
  @media only screen and (max-width: 600px) {
    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & button.checkout {
        position: relative;
        left: 10em;
        top: -2em;
      }
    }
  }
`;

export default CartContainer;
