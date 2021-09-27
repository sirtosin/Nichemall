import React from "react";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CurrencyFormat from "react-currency-format";
import Container from "@mui/material/Container";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useGlobalContext } from "../context";

const Products = () => {
  const { products, addToCart } = useGlobalContext();

  return (
    <div>
      <ProductBody>
        <Container
          fixed
          component="div"
          sx={{
            position: "relative",
            top: "40em",
            left: "3em",
          }}
        >
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{
              textAlign: "center",
              marginBottom: "1em",
            }}
            className="h2"
          >
            Devices that may interest you
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              component="div"
              sx={{
                position: "relative",
                left: "-3em",
                margin: "2em",
              }}
              spacing={{ xs: 2, md: 4 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {products.map((product) => {
                const { id, name, qty, image, price } = product;
                return (
                  <Grid item xs={12} sm={12} md={6}>
                    <Card
                      sx={{ maxWidth: 345 }}
                      key={id}
                      component="div"
                      sx={{
                        boxShadow: "10px 10px 20px #333",
                        margin: "2em",
                      }}
                      className="card"
                    >
                      <CardMedia
                        component="img"
                        height="194"
                        image={image}
                        alt={name}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h4"
                          component="div"
                          sx={{
                            textTransform: "capitalize",
                          }}
                          className="card-name"
                        >
                          {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <CurrencyFormat
                            renderText={(value) => <p>{value}</p>}
                            decimalScale={2}
                            value={price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"N"}
                          />
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          component="div"
                          sx={{
                            marginLeft: "1em",
                            color: "white",
                            padding: " 1em",
                            marginBottom: "2em",
                            borderRadius: "2.3rem",
                            background:
                              "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
                          }}
                          className="card-btn"
                          startIcon={<AddShoppingCartIcon />}
                          onClick={() => addToCart(name, image, price, qty, id)}
                        >
                          <span className="cart">add to cart</span>
                        </Button>

                        <Link to={`/${id}`}>
                          <Button
                            component="div"
                            sx={{
                              marginLeft: "8em",
                              marginBottom: "2em",

                              color: "white",
                              padding: " 1em 4em",
                              borderRadius: "2.3rem",
                              background:
                                "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
                            }}
                            className="card-btn2"
                            startIcon={<VisibilityIcon />}
                          >
                            Preview
                          </Button>
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

const ProductBody = styled.div`
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
  @media only screen and (max-width: 600px) {
    & .h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-top: -2em;
      width: 80%;
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
