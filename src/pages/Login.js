import React, { useState } from "react";
import styled from "styled-components";
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
          <Card>
            <h2
              style={{
                textAlign: "center",
              }}
            >
              Sign-in
            </h2>

            <form>
              <h5 style={{ opacity: ".8" }}>email</h5>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h6 style={{ opacity: ".8" }}>password</h6>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={signIn}
                style={{
                  margin: "6px auto",
                  color: "white",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  padding: " 1em 4em",
                  borderRadius: "2.3rem",
                  background:
                    "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
                }}
              >
                <img src="images/login_black_24dp.svg" />
                Sign In
              </button>
            </form>
            <h6
              style={{
                opacity: ".8",
                padding: "2em",
                fontSize: ".8em",
              }}
            >
              By signing-in you agree to the NicheMall Conditions of Use & Sale.
              Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </h6>
            <button
              onClick={register}
              style={{
                marginBottom: "2em",

                color: "white",
                padding: " 1em 4em",
                borderRadius: "2.3rem",
                background:
                  "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
              }}
            >
              Create your Account
            </button>
          </Card>
        </SignUp>
      </Box>
    </div>
  );
};

const Box = styled.section`
  width: 100%;
  height: 700px;
  margin: auto;
`;

const SignUp = styled.div`
  & form input {
    padding: 1em;
    border: none;
    width: 90%;
    border-bottom: 1px solid #333;
    outline: none;
    font-size: 1em;
  }
  @media only screen and (max-width: 600px) {
    & form input {
      padding: 1em;
      border: none;
      width: 80%;
      border-bottom: 1px solid #333;
      outline: none;
      font-size: 0.8em;
    }
  }
`;

const Card = styled.section`
  box-shadow: 10px 10px 20px #333;
  text-align: center;
  width: 500px;
  position: relative;
  top: 10em;
  height: 400px;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 70%;
    height: 400px;
    position: relative;
    top: 3em;
  }
  @media only screen and (max-width: 600px) {
    width: 70%;
    height: 400px;
    position: relative;
    top: 3em;
  }
`;
export default Login;
