import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useGlobalContext } from "../context";
import Submenu from "../Submenu";

import Sidebar from "../Sidebar";
const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useGlobalContext();

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(
          `https://mrestapi.herokuapp.com/product/${id}`
        );
        const data = await response.json();
        console.log(data);
        if (data) {
          const { _id, qty, name, image, price, desc } = data;

          const newProduct = {
            name: name,
            image: image,
            price: price,
            desc: desc,
            id: _id,
            qty: qty,
          };
          setProduct(newProduct);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [id]);

  if (!product) {
    return (
      <h2
        style={{
          textAlign: "center",
        }}
      >
        no product to display
      </h2>
    );
  } else {
    const { name, qty, image, price, id, desc } = product;
    return (
      <div>
        <Submenu />
        <Sidebar />
        <DetailContent>
          <img src={image} alt={name} />
          <DetailBody>
            <h3
              style={{
                textTransform: "capitalize",
              }}
            >
              {name}
            </h3>
            <h4
              style={{
                textTransform: "capitalize",
                width: "70%",
                opacity: ".8",
              }}
            >
              {desc}
            </h4>
            <p
              style={{
                textTransform: "capitalize",
                opacity: ".8",
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
            </p>

            <button
              style={{
                marginLeft: "3em",
                color: "white",
                display: "flex",
                padding: " 1em 4em",
                marginBottom: "2em",
                borderRadius: "2.3rem",
                background:
                  "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
              }}
              onClick={() => addToCart(name, image, price, qty, id)}
            >
              {" "}
              <img
                style={{ width: "30px", height: "30px" }}
                src="images/add_shopping_cart_black_24dp.svg"
              />
              add to cart
            </button>
          </DetailBody>
        </DetailContent>
      </div>
    );
  }
};

const DetailContent = styled.section`
  display: flex;
  position: relative;
  top: 7em;
  align-items: center;
  margin-left: 4em;
  & img {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 768px) {
    position: relative;
    top: 2em;
  }
  @media (max-width: 600px) {
    position: relative;
    top: 1em;

    & img {
      width: 300px;
      height: 300px;
      margin-left: -14em;
    }
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    align-items: center;
    margin-left: 4em;
  }
`;

const DetailBody = styled.section`
  @media (max-width: 600px) {
    button {
      position: relative;
      left: -3em;
    }
    & img {
      margin-left: 0em;
    }
  }
`;

export default Details;
