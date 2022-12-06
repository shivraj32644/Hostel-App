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
import styles from '../styles/login.module.css'
export const Login = () => {
  return (
    <>
      <Navbar></Navbar>
      <Box
        // display="flex"
        // alignItems={"center"}
        // justifyContent={"center"}
        height="90vh"
        pt={'50px'}
        className={styles.container}
        // pb='500px'
        // border={"5px solid black"}
        
        
      >
        <Box
          
          display={'flex'}
          alignItems='center'
          justifyContent={'center'}
          pb='50px'
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
        <Box
          // border={"5px solid black"}
          width='30%'
          margin='auto'
          height={'500px'}
          p={'20px'}
        
        >
          
          <Box
          display={'flex'}
          alignItems='center'
          justifyContent={'space-between'}
            flexWrap='wrap'
            pb={'10px'}
          >
            <h1>Login</h1>
            <Link style={{color:"blue"}} to='/register'>No Account Yet ?</Link>
          </Box>
          <Box
          display={'flex'}
            // alignItems=''
            flexDirection={'column'}
            width='100%'
            justifyContent={'center'}
            gap='10px'
            pb={'20px'}
          
          >
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
              pb='20px'
            >
              <Divider w='30%' bg={"black"} h={'1px'} borderRadius='10px' />
              <p style={{w:"30.33%"}} >Or Login With ...</p>
              <Divider  w='30%' bg={"black"} h={'1px'} borderRadius='10px'/>
            </Box>

          </Box>
          <Box
          display={'flex'}
          alignItems='center'
          justifyContent={'space-evenly'}
          columnGap='5px'
            
          >
            <Button className={styles.btn}
              display='flex' alignItems={'center'}
              justifyContent='center'
              
            > <FcGoogle /> Google</Button>
            <Button className={styles.btn} > <FaGithub/> Github</Button>
            <Button className={styles.btn}> <FaFacebookSquare/> Facebook</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
