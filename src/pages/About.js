import React from "react";
import styled from "styled-components";
import Submenu from "../Submenu";
import Sidebar from "../Sidebar";
import logo from "./about.png";

const About = () => {
  return (
    <div>
      <Submenu />
      <Sidebar />
      <AboutContent>
        <AboutBody className="left">
          <h2>about us</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            repudiandae architecto qui adipisci in officiis, aperiam sequi atque
            perferendis eos, autem maiores nisi saepe quisquam hic odio...
          </h4>
        </AboutBody>
        <AboutBody className="right">
          <img src={logo} alt="about" />
        </AboutBody>
      </AboutContent>
    </div>
  );
};

const AboutContent = styled.div`
  display: flex;
  height: 500px;
  padding: 2em;

  @media only screen and (max-width: 600px) {
    height: 900px;
    display: flex;
    padding: 2em;
    flex-direction: column;
    margin-top: -6em;
  }
`;

const AboutBody = styled.div`
  @media only screen and (max-width: 600px) {
    &.right img {
      width: 400px;
      height: 300px;
    }
  }
  &.right {
    flex-basis: 60%;
    padding: 2em;
    position: relative;
    overflow: hidden;
  }
  &.right img {
    width: 800px;
    height: 500px;
  }
  &.left {
    padding: 2em;
    flex-basis: 40%;
    position: relative;
    top: 5em;
    margin: 2em;
  }
  &.left h2 {
    color: rgb(33, 38, 107);
  }
  &.left h4 {
    color: #333;
    line-height: 1.5;
    opacity: 0.5;
    margin: 1em;
  }
`;
export default About;
