import styled from "styled-components";
import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import delivery from "./delivery.svg";

const Footer = () => {
  return (
    <div>
      <FooterContent>
        <FooterBody>
          <loaction>
            <LocationOnIcon />
            <br />
            8, kehinde akamo off micheal adekoya ilupeju, lagos.
          </loaction>
          <phone>
            <PhoneIcon />
            <br />
            <code>+234 814 068 0757</code> <br />
            <code>+234 809 965 2296</code>
          </phone>
          <br />
          <mail>
            <MailIcon />
            <br />
            sirtosin45@gmail.com
          </mail>
          <br />
          All rights reserved. copyright &copy; nichemall &#8482; 2021.
        </FooterBody>
        <FooterBody>
          <span>
            <h3>at nicheMall </h3>
            <p>safe delivery on your devices is guaranteed</p>
          </span>
          <img src={delivery} />
        </FooterBody>
      </FooterContent>
    </div>
  );
};

const FooterContent = styled.div`
  position: relative;
  top: 45em;
  width: 100%;
  height: 400px;
  background: rgb(71, 71, 71);
  display: flex;
  color: #fff;
  padding: 4em;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    background: rgb(71, 71, 71);
    width: 100%;
    height: 600px;
  }
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3em;
  opacity: 0.7;

  & img {
    width: 100%;
    position: relative;
    top: -23em;
    margin: 3em;
    left: 7em;
  }

  @media only screen and (min-width: 768px) {
    margin-top: -1em;
    width: 100%;
    position: relative;
    & img {
      max-width: 100%;
      position: absolute;
      top: 2em;
      left: -3em;
    }
    & span h3 {
      position: absolute;
      top: 1em;
      left: 20em;
    }
    & span p {
      position: absolute;
      top: 5em;
      left: 30em;
      width: 100%;
      font-size: 0.8em;
    }
  }
  @media only screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    margin-top: 6em;
    & img {
      max-width: 60%;
      position: relative;
      top: 10em;
      left: -4em;
    }
    & span {
      position: absolute;
      width: 100%;
      height: 40px;
      top: 11em;
    }
    & span h3 {
      position: inherit;
      top: -2em;
    }
    & span p {
      width: 100%;
      font-size: 0.8em;
    }
  }

  & span h3 {
    position: relative;
    top: -3em;
    margin: 3em;
    left: -1em;
  }
  & span p {
    position: relative;
    top: -13em;
    margin: 3em;
    color: #fff;
    left: 0em;
    opacity: 0.5;
  }
`;
export default Footer;
