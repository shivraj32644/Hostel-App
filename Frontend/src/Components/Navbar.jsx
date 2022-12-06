import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import styles from '../styles/navbar.module.css'
import logo from '../Assets/hostel.png'
import { Highlight,Heading } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/react'
import { MdMenuOpen } from "react-icons/md";
export const Navbar = () => {
  const variant = useBreakpointValue(
    {
      base:true,
      sm: true,
      md: false,
      large: false,
    }
  )
  console.log(variant);
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
      {
        variant ?
          (<>
            <Link to={'/'}>
              <Box
                display={'flex'}
                alignItems='center'
                justifyContent={'center'}

              >

                <img style={{ height: "20px" }} src={logo} alt="logo" />

                <Heading lineHeight="tall"
                style={{marginTop:"-10px"}}
                >
                  <Highlight
                    query="Hostel Buddy"
                    styles={{ px: "1", fontSize: "20px", rounded: "full", color: " #25acca " }}
                  >
                    Hostel Buddy
                  </Highlight>
                </Heading>
        
              </Box>
            </Link>
          <MdMenuOpen style={{fontSize:"30px"}} />
        </>)
            :
          (<>
            <Link to={'/'}>
              <Box
                display={'flex'}
                alignItems='center'
                justifyContent={'center'}

              >
        
                <img style={{ height: "30px" }} src={logo} alt="logo" />
                <Heading lineHeight="tall">
                  <Highlight
                    query="Hostel Buddy"
                    styles={{ px: "3", fontSize: "25px", rounded: "full", color: " #25acca " }}
                  >
                    Hostel Buddy
                  </Highlight>
                </Heading>
        
              </Box>
            </Link>
            <Box>
              <Input placeholder="Search Your Hostel" />
            </Box>
            <Box
              display={'flex'}
              alignItems='center'
              justifyContent={'space-between'}
              width='40%'
            >
              {data?.map((e) => (
                <NavLink key={e.title} to={e.to} className={({ isActive }) => isActive ? styles.active : styles.default} >{e.title}</NavLink>
              ))}
            </Box>
          </>)
      }

    </Box>
  );
};
