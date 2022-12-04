import { Button, Input, Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Navbar";
import { Highlight } from "@chakra-ui/react";
import logo from '../Assets/hostel.png'
import { Divider } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
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
            <Box
              display={'flex'}
              alignItems="center"
              justifyContent={'space-between'}
            >
              <Divider w='33%' bg={"blue"} h={'1px'} borderRadius='10px' />
              <p style={{w:"33.33%"}} >Or Login With ...</p>
              <Divider  w='33%' bg={"blue"} h={'1px'} borderRadius='10px'/>
            </Box>

          </Box>
          <Box>
            <Button className="btn" > <FcGoogle/> Google</Button>
            <Button className="btn" > <FaGithub/> Github</Button>
            <Button className="btn" > <FaFacebookSquare/> Facebook</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
