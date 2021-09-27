import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { useGlobalContext } from "../context";
import Submenu from "../Submenu";
import Sidebar from "../Sidebar";
const Details = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const { addToCart } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
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
      setLoading(false);
    }
    getProduct();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return (
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{
          textAlign: "center",
        }}
      >
        no product to display
      </Typography>
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
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{
                textTransform: "capitalize",
              }}
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                textTransform: "capitalize",
                width: "70%",
                opacity: ".8",
              }}
            >
              {desc}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{
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
            </Typography>

            <Button
              component="div"
              sx={{
                marginLeft: "3em",
                color: "white",
                padding: " 1em 4em",
                marginBottom: "2em",
                borderRadius: "2.3rem",
                background:
                  "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
              }}
              startIcon={<AddShoppingCartIcon />}
              onClick={() => addToCart(name, image, price, qty, id)}
            >
              add to cart
            </Button>
          </DetailBody>
        </DetailContent>
      </div>
    );
  }
};

const DetailContent = styled.div`
  display: flex;
  margin-top: 3em;
  align-items: center;
  margin-left: 4em;
  & img {
    width: 400px;
    height: 400px;
  }
`;

const DetailBody = styled.div``;

export default Details;
