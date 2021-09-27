import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import img from "./gadgets.jpg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div>
      <HeroContainer
        className="hero"
        onMouseOver={closeSubmenu}
      ></HeroContainer>
    </div>
  );
};

const HeroContainer = styled.div`
  &.hero {
    position: absolute;
    top: 0;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    z-index: -3;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (max-width: 600px) {
    .nav-header .btn {
      display: none;
    }
  }
`;

export default Hero;
