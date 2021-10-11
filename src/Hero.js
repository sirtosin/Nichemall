import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import img from "./gadgets.jpg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div>
      <HeroContainer className="hero" onMouseOver={closeSubmenu}>
        <img
          style={{
            width: "100%",
            maxHeight: "500px",
          }}
          src={img}
        />
      </HeroContainer>
    </div>
  );
};

const HeroContainer = styled.section`
  width: 100%;
  overflow: hidden;
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
