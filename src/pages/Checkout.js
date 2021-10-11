import React from "react";
import { FaHome } from "react-icons/fa";
import CurrencyFormat from "react-currency-format";
import Submenu from "../Submenu";
import Sidebar from "../Sidebar";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
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
    <Container>
      <Submenu />
      <Sidebar />
      <h4
        style={{
          textTransform: "capitalize",
          margin: "2em",
        }}
      >
        hello, {user.email}
      </h4>
      {cart.map((item) => {
        const { _id, qty, name, image, price } = item;
        return (
          <CheckoutContent key={_id}>
            <img src={image} alt={name} />
            <CheckoutBody>
              <h4
                style={{
                  textTransform: "capitalize",
                  opacity: ".8",
                }}
              >
                {name}
              </h4>
              <h5
                style={{
                  textTransform: "capitalize",
                  opacity: ".8",
                }}
              >
                Quantity: {qty}
              </h5>
              <small
                style={{
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
              </small>
            </CheckoutBody>
          </CheckoutContent>
        );
      })}
      <footer>
        <h4
          style={{
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
        </h4>
        <Link to="/">
          <button style={{}} className="back">
            <FaHome />
            Back home
          </button>
        </Link>
        <PaystackButton className="paystack" {...componentProps} />
      </footer>
    </Container>
  );
};

const CheckoutContent = styled.section`
  display: flex;
  padding: 1em;
  margin: 1em;
  & img {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 768px) {
    & img {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 600px) {
    & img {
      width: 100px;
      height: 100px;
    }
  }
`;

const Container = styled.section`
  overflow: hidden;
  margin: 0em;
  position: relative;
  top: 5em;
  & .paystack {
    border: none;
    padding: 1em 2em;
    border-radius: 2.3rem;
    cursor: pointer;
    background-color: rgba(67, 67, 252, 0.767);
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
  }

  & footer button.back {
    text-transform: capitalize;
    color: orange;
    background: #333;
    border: none;
    padding: 1em 2em;
    margin-bottom: 2em;
    border-radius: 2.3rem;
    margin-left: 2em;
    cursor: pointer;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    position: relative;
    top: 1em;
    & footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & footer button.back {
      margin-left: -22em;
    }
    & .paystack {
      position: relative;
      top: -5em;
    }
  }
  @media (max-width: 600px) {
    position: relative;
    top: 1em;
    & footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & footer button.back {
      margin-left: -15em;
    }
    & .paystack {
      position: relative;
      left: 5em;
    }
  }
`;
const CheckoutBody = styled.section``;
export default Checkout;
