import React, { useState } from "react";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import Submenu from "../Submenu";
import Sidebar from "../Sidebar";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <Submenu />
      <Sidebar />
      <Box>
        <SignUp>
          <Card
            component="div"
            sx={{
              boxShadow: "10px 10px 20px #333",
              textAlign: "center",
              width: "500px",
              position: "relative",
              top: "2em",
              height: "80vh",
              margin: "auto",
            }}
          >
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              sx={{
                textAlign: "center",
              }}
            >
              Sign-in
            </Typography>

            <form>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ opacity: ".8" }}
              >
                email
              </Typography>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ opacity: ".8" }}
              >
                password
              </Typography>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                onClick={signIn}
                component="div"
                sx={{
                  marginTop: "1em",
                  color: "white",
                  padding: " 1em 4em",
                  borderRadius: "2.3rem",
                  background:
                    "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
                }}
                startIcon={<LoginIcon />}
              >
                Sign In
              </Button>
            </form>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                opacity: ".8",
                padding: "2em",
                fontSize: ".8em",
              }}
            >
              By signing-in you agree to the NicheMall Conditions of Use & Sale.
              Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </Typography>
            <Button
              onClick={register}
              component="div"
              sx={{
                marginBottom: "2em",

                color: "white",
                padding: " 1em 4em",
                borderRadius: "2.3rem",
                background:
                  "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
              }}
            >
              Create your Account
            </Button>
          </Card>
        </SignUp>
      </Box>
    </div>
  );
};

const SignUp = styled.div`
  & form input {
    padding: 1em;
    border: none;
    width: 90%;
    border-bottom: 1px solid #333;
    outline: none;
    font-size: 1em;
  }
`;
export default Login;
