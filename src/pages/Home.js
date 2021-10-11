import React from "react";
import Hero from "../Hero";
import Sidebar from "../Sidebar";
import Products from "./Products";
import Submenu from "../Submenu";
import styled from "styled-components";
import Footer from "../Footer";
export default function Home() {
  return (
    <Main>
      <Sidebar />
      <Hero />
      <Submenu />
      <Products />
      <Footer />
    </Main>
  );
}

const Main = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
