import { Button, Input, Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Navbar";
import { Highlight } from "@chakra-ui/react";
import logo from '../Assets/hostel.png'
import { Divider } from '@chakra-ui/react'
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
          <Box>
            <h1>Login</h1>
            <Link to='/register'>No Account Yet ?</Link>
          </Box>
          <Box>
            <Input placeholder="Enter Email" />
            <Input placeholder="Enter Password" />
            <Box>
              <p>Forgot Password</p>
            </Box>
            <Button>Login</Button>


          </Box>
          <Box>
            <Box>
              <Divider />
              <p>Login with</p>
              <Divider />
            </Box>

          </Box>
          <Box>
            <Button>Github</Button>
            <Button>Google</Button>
            <Button>Facebook</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
