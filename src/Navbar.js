import React from "react";
import logo from "./images/niche-mall-logo.png";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import LockIcon from "@mui/icons-material/Lock";

import Button from "@mui/material/Button";
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
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} className="nav-logo" alt="" />
          </Link>
          <Button className="btn toggle-btn" onClick={openSidebar}>
            <MenuIcon />
          </Button>
        </div>

        <ul className="nav-links">
          <Link>
            <li>
              <Button utton className="link-btn" onMouseOver={displaySubmenu}>
                social
              </Button>
            </li>
          </Link>
          <Link>
            <li>
              <Button className="link-btn" onMouseOver={displaySubmenu}>
                company
              </Button>
            </li>
          </Link>
          <li>
            <Link to={!user && "/login"}>
              <Button
                sx={{ marginTop: "1em" }}
                onClick={handleAuthenticaton}
                startIcon={<LockIcon />}
              >
                {user ? "Sign out" : "Sign in"}
              </Button>
            </Link>
          </li>
        </ul>
        <CartBtn>
          <Link to="/cart">
            <Button>
              <ShoppingCartIcon />
              {qty}
            </Button>
          </Link>
        </CartBtn>
      </div>
    </nav>
  );
};

const CartBtn = styled.div`
  @media all and (max-width: 600px) {
    margin-top: -3em;
  }
  @media all and (max-width: 768px) {
    margin-top: -3em;
    margin-left: 20em;
  }
  /* @media all and (min-width: 992px) {
    margin: 0em;
  } */
`;

export default Navbar;
