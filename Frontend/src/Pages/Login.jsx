import { Button, Input, Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Navbar";
import { Highlight } from "@chakra-ui/react";
import logo from '../Assets/hostel.png'
export const Login = () => {
  return (
    <>
      <Navbar></Navbar>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        height="90vh"
        border={"5px solid black"}
      >
        <Box>
          <Box
          
            display={'flex'}
            alignItems='center'
            justifyContent={'center'}
          >
              <img src={logo} alt="logo" />
            <Heading lineHeight="tall">
              <Highlight
                query="Hostel Buddy"
                styles={{ px: "2", py: "1", rounded: "full", color: " #25acca " }}
              >
                Hostel Buddy
              </Highlight>
            </Heading>
          </Box>
          <Input placeholder="Enter Email" />
          <Input placeholder="Enter Password" />
          <Button>Login</Button>
        </Box>
      </Box>
    </>
  );
};
