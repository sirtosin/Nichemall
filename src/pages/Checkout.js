import React from "react";
import CurrencyFormat from "react-currency-format";
import Submenu from "../Submenu";
import Sidebar from "../Sidebar";
import { Link, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { PaystackButton } from "react-paystack";
import { useGlobalContext } from "../context";

const Checkout = () => {
  const { loading, user, cart, total } = useGlobalContext();
  const history = useHistory();

  const config = {
    reference: new Date().getTime().toString(),
    email: user.email,
    amount: total * 100,
    publicKey: "pk_test_3eb5e531d4ed919aaf3d459a8490e4e9eac550cb",
  };

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    alert(reference.message);
    if (reference) {
      history.push("/");
    }
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Pay Now",
    onSuccess: (reference) => {
      handlePaystackSuccessAction(reference);
    },
    onClose: handlePaystackCloseAction,
  };

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <Submenu />
      <Sidebar />
      <Typography
        gutterBottom
        variant="body1"
        color="text.secondary"
        sx={{
          textTransform: "capitalize",
          margin: "2em",
        }}
      >
        hello, {user.email}
      </Typography>
      {cart.map((item) => {
        const { _id, qty, name, image, price } = item;
        return (
          <CheckoutContent key={_id}>
            <img src={image} alt={name} />
            <CheckoutBody>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{
                  textTransform: "capitalize",
                  opacity: ".8",
                }}
              >
                {name}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textTransform: "capitalize",
                  opacity: ".8",
                }}
              >
                Quantity: {qty}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="text.secondary"
                component="div"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <CurrencyFormat
                  renderText={(value) => <p>Unit Price: {value}</p>}
                  decimalScale={2}
                  value={price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"N"}
                />
              </Typography>
            </CheckoutBody>
          </CheckoutContent>
        );
      })}
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          textTransform: "capitalize",
          color: "black",
          fontWeight: "bold",
          marginLeft: "23em",
        }}
      >
        <CurrencyFormat
          renderText={(value) => <p>total: {value}</p>}
          decimalScale={2}
          value={total}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"N"}
        />
      </Typography>
      <Link to="/">
        <Button
          sx={{
            textTransform: "capitalize",
            color: "orange",
            padding: " 1em 4em",
            marginBottom: "2em",
            borderRadius: "2.3rem",
            marginLeft: "22em",
            fontWeight: "bold",
          }}
          startIcon={<HomeIcon />}
        >
          Back home
        </Button>
      </Link>
      <PayButton>
        <PaystackButton className="paystack" {...componentProps} />
      </PayButton>
    </div>
  );
};

const CheckoutContent = styled.div`
  display: flex;
  padding: 1em;
  margin: 1em;
  & img {
    width: 300px;
    height: 300px;
  }
`;

const PayButton = styled.div`
  position: relative;

  & .paystack {
    position: relative;
    left: 55em;
    top: -7em;
    z-index: -2;
    cursor: pointer;
    text-align: center;
    font-size: 10px;
    letter-spacing: 0.1rem;
    padding: 1em 4em;
    border-radius: 2.3rem;
    text-transform: uppercase;
    background: rgb(221, 119, 204);
    font-weight: bold;
    color: #fff;
    border: none;
    border-radius: 1.3em;
  }
`;
const CheckoutBody = styled.div``;
export default Checkout;
