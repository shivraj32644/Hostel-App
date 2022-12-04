import React from "react";
import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from '../styles/navbar.module.css'
export const Navbar = () => {
  const data = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/register",
      title: "Signup",
    },
    {
      to: "/about",
      title: "About Us",
    },
    {
      to: "/contact",
      title: "Contact",
    },
  ];
  return (
    <Box
      display={"flex"}
      alignItems="center"
      height={"60px"}
      boxShadow="outline"
      justifyContent={"space-evenly"}
    >
      {data?.map((e) => (
        <NavLink to={e.to} className={({isActive})=>isActive? styles.active :styles.default} >{e.title}</NavLink>
      ))}
    </Box>
  );
};
