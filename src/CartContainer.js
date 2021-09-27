import React from "react";
import CurrencyFormat from "react-currency-format";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import Typography from "@mui/material/Typography";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Button from "@mui/material/Button";

const CartContainer = () => {
  const { cart, user, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    console.log(cart);
    return (
      <header>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            textAlign: "center",
          }}
        >
          Cart item
        </Typography>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            textAlign: "center",
          }}
        >
          is currently empty
        </Typography>
      </header>
    );
  }
  return (
    <div>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{
          textAlign: "center",
          marginBottom: "1em",
          textTransform: "capitalize",
        }}
      >
        your items
      </Typography>
      <CartItem />;
      <CurrencyFormat
        renderText={(value) => (
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            total: {value}
          </Typography>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"N"}
      />
      <footer>
        <hr />
        <Button
          component="div"
          sx={{
            marginLeft: "30em",
            marginBottom: "2em",
            marginTop: "2em",
            color: "white",
            padding: " 1em 4em",
            borderRadius: "2.3rem",
            background:
              "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
          }}
          startIcon={<CleaningServicesIcon />}
          onClick={clearCart}
        >
          clear cart
        </Button>
        <Link to={user ? "/checkout" : "/cart"}>
          <Button
            component="div"
            sx={{
              marginLeft: "10em",
              marginTop: "2em",
              marginBottom: "2em",

              color: "white",
              padding: " 1em 4em",
              borderRadius: "2.3rem",
              background:
                "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
            }}
          >
            {user ? "checkout" : "sign in to checkout"}
          </Button>
        </Link>
      </footer>
    </div>
  );
};

export default CartContainer;
