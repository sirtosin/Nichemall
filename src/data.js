import CreditCardIcon from "@material-ui/icons/CreditCard";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InfoIcon from "@material-ui/icons/Info";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import FacebookIcon from "@material-ui/icons/Facebook";
import React from "react";

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
        icon: <FacebookIcon />,
        url: "http://facebook.com/",
      },
      {
        label: "Instagram",
        icon: <InstagramIcon />,
        url: "http://instagram.com/",
      },
      {
        label: "Twitter",
        icon: <TwitterIcon />,
        url: "http://twitter.com/",
      },
      {
        label: "Whatsapp",
        icon: <WhatsAppIcon />,
        url: "http://whatsapp.com/",
      },
    ],
  },
  {
    page: "company",
    links: [
      {
        label: "about",
        icon: <InfoIcon />,
        url: "/about",
      },
      {
        label: "contacts",
        icon: <PhoneIcon />,
        url: "/contact",
      },
    ],
  },
];
