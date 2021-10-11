import React from "react";
import Submenu from "../Submenu";
import Sidebar from "../Sidebar";
import styled from "styled-components";
import emailjs from "emailjs-com";
const Contact = () => {
  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_flkrdsv",
        "template_jdlbhtn",
        e.target,
        "user_mML5861C6JthDECs6ohOs"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Submenu />
      <Sidebar />

      <h3 style={{}}>Contact Us</h3>
      <h6 style={{}}>
        Feel free to make any enquires about any device on our page
      </h6>
      <ContactContent>
        <ContactBodyLeft className="left">
          <div>
            <h4
              style={{
                textTransform: "capitalize",
              }}
            >
              Contact Information
            </h4>
            <p style={{ opacity: ".6" }}>
              Fill the form and a representative will get back to you within 24
              hours.
            </p>
            <phone>
              <img src="images/phone_black_24dp.svg" />
              <br />
              <code>+234 814 068 0757</code> <br />
              <code>+234 809 965 2296</code>
            </phone>
            <br />
            <mail>
              <img src="images/email_black_24dp.svg" />
              <br />
              sirtosin45@gmail.com
            </mail>
            <br />
            <loaction>
              <img src="images/location_on_black_24dp.svg" />
              <br />
              8, kehinde akamo off micheal adekoya ilupeju, lagos.
            </loaction>
            <smallcircle></smallcircle>
          </div>
        </ContactBodyLeft>
        <ContactBodyRight className="right">
          <form onSubmit={sendMail}>
            <label for="name"> full name</label>
            <br />
            <input type="text" name="name" id="name" placeholder="Full name" />
            <br />
            <label for="email">email</label>
            <br />
            <input
              type="email"
              name="user-email"
              id="email"
              placeholder="email"
            />
            <br />
            <label for="phone"> phone number</label>
            <br />
            <input
              type="tel"
              name="user-phone"
              id="phone"
              placeholder="phone number"
            />
            <br />
            <label for="message">message</label>
            <br />
            <textarea
              id="message"
              name="message"
              placeholder="message
            "
              rows=""
              cols=""
            ></textarea>
            <br />
            <button
              style={{
                marginLeft: "0em",
                marginTop: "1.7em",
                color: "white",
                padding: " 1em 4em",
                borderRadius: "2.3rem",
                background:
                  "linear-gradient(to right, rgb(120, 119, 221), rgb(221, 119, 204))",
                border: "none",
                width: "100%",
                cursor: "pointer",
              }}
              type="submit"
            >
              send message
            </button>
          </form>
        </ContactBodyRight>
      </ContactContent>
    </Container>
  );
};

const Container = styled.div`
  height: 800px;
  width: 100%;
  h3 {
    position: relative;
    top: 1.4em;
    z-index: -2;
    font-size: 5em;
    color: rgb(33, 38, 107);
    text-transform: capitalize;
    text-align: center;
  }
  h6 {
    color: rgb(140, 142, 160);
    text-transform: capitalize;
    text-align: center;
    font-size: 0.8em;
    position: relative;
    top: 8.4em;
  }
  @media (max-width: 768px) {
    h3 {
      top: 0.4em;
      font-size: 3em;
    }
    h6 {
      top: 0.4em;
    }
  }
`;

const ContactContent = styled.section`
  display: flex;
  margin: 3em;
  background: #fff;
  position: relative;
  top: 7em;
  border-radius: 1.5rem;
  max-width: 1200px;
  height: 500px;
  box-shadow: 10px 20px 40px black;

  @media only screen and (max-width: 600px) {
    display: flex;
    height: 850px;
    flex-direction: column;
    margin: auto;
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    height: 850px;
    margin: auto;
    width: 80%;
    position: relative;
    top: 1.7em;
    flex-direction: column;
  }
`;

const ContactBodyRight = styled.section`
  width: 100%;
  @media only screen and (max-width: 600px) {
    &.right {
      margin-left: -6em;
      width: 100%;
      margin-bottom: -3em;
    }
  }
  &.right {
    height: inherit;
    width: auto;
    padding: 3em;
    flex-basis: 60%;
  }

  & form {
    margin: auto 6em;
  }
  & form ::placeholder {
    opacity: 0.3;
  }
  & form input,
  textarea {
    padding: 1em;
    border: none;
    width: 220px;
    border-bottom: 1px solid #333;
    outline: none;
    font-size: 1em;
    resize: none;
  }

  & label {
    opacity: 0.6;
  }
`;

const ContactBodyLeft = styled.section`
  width: 100%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 1.3em;
  }
  &.left {
    background-color: rgb(130, 69, 228);
    border-radius: 1.3rem;
    height: inherit;
    width: auto;
    padding: 3em;
    flex-basis: 40%;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  &.left h3 {
    text-align: center;
    text-transform: capitalize;
    color: #fff;
  }
  &.left p {
    color: #fff;
    opacity: 0.6;
  }
  & code {
    margin: 2em;
  }

  & smallcircle {
    display: block;
    background: pink;
    border-radius: 50%;
    height: 260px;
    width: 260px;
    margin: 0;
    position: absolute;
    right: -2em;
    bottom: -3em;
    opacity: 0.5;
  }
`;

export default Contact;
