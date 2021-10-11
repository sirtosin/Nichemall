import styled from "styled-components";
import React from "react";
import delivery from "./delivery.svg";

const Footer = () => {
  return (
    <div>
      <FooterContent>
        <FooterBodyOne>
          <Location>
            <img
              style={{ width: "28px", height: "28px", marginBottom: "0em" }}
              src="/images/location_on_black_24dp.svg"
            />
            <br />
            8, kehinde akamo off micheal adekoya ilupeju, lagos.
          </Location>
          <Phone Phone>
            <img
              style={{ width: "28px", height: "28px", marginBottom: "0em" }}
              src="/images/phone_black_24dp.svg"
            />
            <br />
            <code>+234 814 068 0757</code> <br />
            <code>+234 809 965 2296</code>
          </Phone>
          <br />
          <Mail>
            <img
              style={{ width: "28px", height: "28px", marginBottom: "0em" }}
              src="/images/email_black_24dp.svg"
            />
            <br />
            sirtosin45@gmail.com
          </Mail>
          <br />
          <p style={{ margin: "1.7em -1.2em" }}>
            All rights reserved. copyright &copy; nichemall &#8482; 2021.
          </p>
        </FooterBodyOne>
        <FooterBody>
          <span>
            <h3>at nicheMall </h3>
            <p>safe delivery on your devices is guaranteed</p>
          </span>
          <img style={{ width: "400px", marginTop: "-12em" }} src={delivery} />
        </FooterBody>
      </FooterContent>
    </div>
  );
};

const FooterContent = styled.section`
  width: 100%;
  height: 450px;
  overflow: hidden;
  background: rgb(71, 71, 71);
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    background: rgb(71, 71, 71);
    width: 100%;
    height: 600px;
  }
`;

const FooterBody = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3em;
  padding: 1em;
  opacity: 0.7;

  & img {
    width: 100%;
    position: relative;
    top: 8em;
  }
  & span {
    position: relative;
    top: -5em;
    display: flex;
    flex-direction: column-reverse;
    & h3 {
      width: 100%;
      padding: 0.67em;
      margin-top: -3em;
    }
    & p {
      width: 100%;
      font-size: 0.8em;
    }
  }

  @media only screen and (max-width: 768px) {
    & span {
      margin: -1em 3em;
      & h3 {
        position: relative;
        top: -3em;
      }
      & p {
        padding: 0.8em;
        position: relative;
        top: -3em;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    margin-top: 6em;
    & img {
      max-width: 60%;
      position: relative;
      top: 15em;
      left: 3em;
    }
    & span {
      position: absolute;
      width: 100%;
      top: 11em;
      & h3 {
        position: inherit;
        top: -5em;
      }
      & p {
        position: inherit;
        top: -10em;
      }
    }
  }
`;

const Location = styled.div`
  margin-bottom: -1.7em;
`;
const Phone = styled.div`
  margin-bottom: -1.7em;
`;
const Mail = styled.div`
  margin-bottom: -1.7em;
`;

const FooterBodyOne = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3em;
  padding: 1em;
  opacity: 0.7;

  & img {
    width: 100%;
    margin: 3em;
    left: 7em;
  }
`;
export default Footer;
