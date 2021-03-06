import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

// export const products = [
//   {
//     _id: 1,
//     name: "smart digital tire inflator",
//     image: require("./images/smart-digital-tire.jpg"),
//     price: 25000,
//     desc: "lorem",
//     qty: 1,
//     inCart: false,
//   },
//   {
//     _id: 2,
//     name: "rechargeable fan",
//     image: require("./images/rechargeable-fan.jpg"),
//     price: 25000,
//     desc: "lorem",
//     qty: 1,
//     inCart: false,
//   },
//   {
//     _id: 3,
//     name: "solar wall light",
//     image: require("./images/solar-wall-light.jpg"),
//     price: 25000,
//     desc: "lorem",
//     qty: 1,
//     inCart: false,
//   },
//   {
//     _id: 4,
//     name: "earbuds",
//     image: require("./images/earbuds.jpg"),
//     price: 25000,
//     desc: "lorem",
//     qty: 1,
//     inCart: false,
//   },
// ];

export const sublinks = [
  {
    page: "social",
    links: [
      {
        label: "Facebook",
        icon: <FaFacebookF />,
        url: "http://facebook.com/",
      },
      {
        label: "Instagram",
        icon: <FaInstagram />,
        url: "http://instagram.com/",
      },
      {
        label: "Twitter",
        icon: <FaTwitter />,
        url: "http://twitter.com/",
      },
      {
        label: "Whatsapp",
        icon: <FaWhatsapp />,
        url: "http://whatsapp.com/",
      },
    ],
  },
  {
    page: "company",
    links: [
      {
        label: "about",
        icon: <FaInfoCircle />,
        url: "/about",
      },
      {
        label: "contacts",
        icon: <FaPhone />,
        url: "/contact",
      },
    ],
  },
];
