import React from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useGlobalContext } from "../context";

const Products = () => {
  const { products, addToCart } = useGlobalContext();

  return (
    <div>
      <ProductBody>
        <Container>
          <h2 style={{}} className="h2">
            Devices that may interest you
          </h2>

          <Box>
            <Grid>
              {products.map((product) => {
                const { id, name, qty, image, price } = product;
                return (
                  <Grid>
                    <Card
                      style={{
                        maxWidth: 400,
                        boxShadow: "10px 10px 20px #333",
                        margin: "2em",
                      }}
                      key={id}
                      className="card"
                    >
                      <img
                        style={{
                          height: "200px",
                          width: "200px",
                          objectFit: "cover",
                          marginLeft: "3em",
                        }}
                        src={image}
                        alt={name}
                      />
                      <CardContent>
                        <h4
                          style={{
                            textTransform: "capitalize",
                            opacity: ".8",
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginLeft: "1em",
                          }}
                          className="card-name"
                        >
                          {name}
                        </h4>
                        <h4>
                          <CurrencyFormat
                            renderText={(value) => (
                              <p
                                style={{
                                  marginLeft: "1em",
                                }}
                              >
                                {value}
                              </p>
                            )}
                            decimalScale={2}
                            value={price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"N"}
                          />
                        </h4>
                      </CardContent>
                      <CardActions>
                        <button
                          style={{
                            color: "white",
                            padding: " 1em",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "2em",
                            borderRadius: "2.3rem",
                            border: "none",
                            background:
                              "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
                          }}
                          className="card-btn"
                          onClick={() => addToCart(name, image, price, qty, id)}
                        >
                          <img
                            style={{ width: "20px", height: "20px" }}
                            src="/images/add_shopping_cart_black_24dp.svg"
                          />

                          <span className="cart">add to cart</span>
                        </button>

                        <Link to={`/${id}`}>
                          <button
                            style={{
                              marginBottom: "2em",
                              color: "white",
                              alignItems: "center",
                              display: "flex",
                              padding: " 1em 2em",
                              border: "none",
                              borderRadius: "2.3rem",
                              background:
                                "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
                            }}
                            className="card-btn2"
                          >
                            <FaRegEye style={{ color: "black" }} /> Preview
                          </button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </ProductBody>
    </div>
  );
};
const Container = styled.div`
  & h2 {
    text-align: center;
    margin-top: 1.5em;
    margin-bottom: 1em;
    opacity: 0.7;
  }
  @media only screen and (min-width: 1200px) {
    & h2 {
      position: relative;
      top: -2em;
      left: 1.3em;
    }
  }
  @media only screen and (max-width: 768px) {
    & h2 {
      position: relative;
      top: 2em;
      left: 1.3em;
    }
    @media only screen and (max-width: 600px) {
      & h2 {
        position: relative;
        top: 2.5em;
        left: 2em;
        margin-bottom: 3em;
      }
    }
  }
`;
const Box = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2px;
  align-items: center;
  margin-left: 5em;
  @media only screen and (width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2px;
    align-items: center;
    margin-top: 3em;
    margin-left: 1.3em;
  }
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2px;
    align-items: center;
    margin-top: 3em;
    margin-left: 1.3em;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;
const Card = styled.div``;
const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 600px) {
    margin-top: 4em;
    margin-left: -4em;
  }
`;
const CardContent = styled.div``;

const ProductBody = styled.div`
  overflow: hidden;
  @media only screen and (width: 1024px) {
    & .card-btn {
      font-size: 0.8em;
      margin-left: 0.8em;
      padding: 1em 2em;
    }
    & .card-btn2 {
      padding: 1em 2em;
      font-size: 0.8em;
      margin-left: 2em;
    }
  }
  @media only screen and (min-width: 1200px) {
    & .h2 {
      font-size: 2.7rem;
      text-align: center;
      margin-left: -1em;
      width: 100%;
      margin-top: 5em;
    }
  }
  @media only screen and (max-width: 768px) {
    & .h2 {
      font-size: 2.7rem;
      text-align: center;
      margin-left: -1em;
      margin-top: -1em;
      width: 100%;
    }
  }
  @media only screen and (max-width: 600px) {
    & .h2 {
      font-size: 2rem;
      text-align: center;
      margin-left: -2em;
      margin-top: -2em;
      width: 100%;
    }
    & .card {
      height: 350px;
      width: 350px;
    }
    & .card-name {
      font-size: 1.5rem;
    }
    & .card-btn {
      margin-top: -3em;
      background: transparent;
      color: black;
    }
    & .card-btn .cart {
      display: none;
    }
    & .card-btn2 {
      margin-top: -5em;
      font-size: 0.7rem;
      padding: 0.8em 1.2em;
    }
  }
`;

export default Products;
