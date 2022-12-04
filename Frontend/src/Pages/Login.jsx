import { Button, Input, Box } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Navbar";

export const Login = () => {
  return (
    <>
      <Navbar></Navbar>
      <Box display="flex"
      alignItems={'center'}
        justifyContent={'center'}
        height='90vh'
        border={'1px solid black'}
      >
        <Input placeholder="Enter Email" />
        <Input placeholder="Enter Password" />
        <Button>Login</Button>
      </Box>
    </>
  );
};
