import React from "react";
import { FaLock, FaCartPlus } from "react-icons/fa";
import logo from "./images/niche-mall-logo.png";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import "./index.css";
import { useGlobalContext } from "./context";
import { auth } from "./firebase";

const Navbar = () => {
  const { openSidebar, user, qty, openSubmenu, closeSubmenu } =
    useGlobalContext();
  const history = useHistory();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
      console.log(user);
      history.push("/");
    }
  };

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <Nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} className="nav-logo" alt="" />
          </Link>
          <button
            className="btn toggle-btn"
            style={{
              background: "transparent",
              border: "none",
            }}
            onClick={openSidebar}
          >
            <img src="/images/menu_black_24dp.svg" />
          </button>
        </div>

        <ul className="nav-links">
          <Link>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                social
              </button>
            </li>
          </Link>
          <Link>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                company
              </button>
            </li>
          </Link>
        </ul>
      </div>
      <SignOut>
        <Link to={!user && "/login"}>
          <button
            style={{
              marginTop: "1em",
              background: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgb(74, 113, 145)",
              cursor: "pointer",
              fontSize: "18px",
            }}
            onClick={handleAuthenticaton}
          >
            <FaLock
              style={{
                color: "rgba(74, 113, 145,)",
              }}
            />
            {user ? "Sign out" : "Sign in"}
          </button>
        </Link>
      </SignOut>

      <CartBtn>
        <Link to="/cart">
          <button
            style={{
              background: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "19px",
              color: "rgb(74, 113, 145)",
              cursor: "pointer",
            }}
          >
            <FaCartPlus
              style={{
                color: "rgb(74, 113, 145)",
              }}
            />

            {qty}
          </button>
        </Link>
      </CartBtn>
    </Nav>
  );
};
const Nav = styled.nav`
  background: #f5f5f5;
  position: fixed;
  box-shadow: 1px 1px 1px 1px rgb(0, 0, 0, 0.75);
  width: 100%;
  height: 25px;
  @media all and (max-width: 600px) {
    display: flex;
    padding: 3em;
    align-items: center;
    flex-direction: column-reverse;
    position: relative;
    justify-content: space-evenly;
  }
  @media all and (max-width: 768px) {
    display: flex;
    padding: 3em;
    align-items: center;
    flex-direction: column-reverse;
    position: relative;
    justify-content: space-evenly;
  }
`;
const SignOut = styled.div`
  display: flex;
  position: absolute;
  left: 40em;
  top: 1em;
  @media all and (min-width: 1200px) {
    left: 45em;
  }
  @media all and (max-width: 600px) {
    margin-left: -3em;
  }
  @media all and (max-width: 425px) {
    top: 1em;
    margin-left: -7em;
  }
  @media all and (max-width: 768px) {
    left: 15em;
  }
`;
const CartBtn = styled.div`
  @media all and (max-width: 425px) {
    position: absolute;
    top: 5em;
    margin-left: -22em;
  }
  @media all and (max-width: 600px) {
    position: absolute;
    top: 5em;
    margin-left: -14em;
  }
  @media all and (max-width: 768px) {
    position: absolute;
    top: 2em;
    left: 30em;
  }
  /* @media all and (min-width: 992px) {
    margin: 0em;
  } */
`;

export default Navbar;
