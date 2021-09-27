import React from "react";
import Hero from "../Hero";
import Sidebar from "../Sidebar";
import Products from "./Products";
import Submenu from "../Submenu";
import Footer from "../Footer";
export default function Home() {
  return (
    <main>
      <Sidebar />
      <Hero />
      <Submenu />
      <Products />
      <Footer />
    </main>
  );
}
