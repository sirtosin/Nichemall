import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import Typography from "@mui/material/Typography";
import Submenu from "../Submenu";
import Sidebar from "../Sidebar";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
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
    <div>
      <Submenu />
      <Sidebar />

      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{
          color: "rgb(33, 38, 107)",
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        Contact Us
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          color: "rgb(140, 142, 160)",
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        Feel free to make any enquires about any device on our page
      </Typography>
      <ContactContent>
        <ContactBodyLeft className="left">
          <div>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Contact Information
            </Typography>
            <Typography
              gutterBottom
              variant="small"
              component="div"
              sx={{ opacity: ".6" }}
            >
              Fill the form and a representative will get back to you within 24
              hours.
            </Typography>
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
            <loaction>
              <LocationOnIcon />
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
    </div>
  );
};

const ContactContent = styled.div`
  display: flex;
  margin: 3em 5em;
  background: #fff;
  border-radius: 1.5rem;
  height: 500px;
  box-shadow: 10px 20px 40px black;

  @media only screen and (max-width: 600px) {
    display: flex;
    height: 850px;
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    height: 850px;
    flex-direction: column;
  }
`;

const ContactBodyRight = styled.div`
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
    width: 90%;
    border-bottom: 1px solid #333;
    outline: none;
    font-size: 1em;
  }

  & label {
    opacity: 0.6;
  }
`;

const ContactBodyLeft = styled.div`
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
