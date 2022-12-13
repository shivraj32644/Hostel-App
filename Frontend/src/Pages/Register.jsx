import React from "react";
import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Input,
} from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";

import { Highlight } from "@chakra-ui/react";
import logo from "../Assets/hostel.png";
import { Divider } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import styles from "../styles/login.module.css";
import { FieldFeedback } from "react-form-with-constraints";

var userObj = {
  name: "",
  email: "",
  password: "",
};
export const Register = () => {
  const [userData, setUserData] = useState(userObj);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSignup, setSignup] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    let { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };
  const signup = () => {
    setLoading(true);
    fetch(`http://localhost:9020/auth/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("this is the result of signup",res);
        setLoading(false);
        // setSignup(true)
        // setTimeout(() => {
        //   navigate('/')
        //   setSignup(false)
        // },3000)
      })
      .catch((err) => {
        console.log( "This error occurs in signup", err)
        setError(true);
        setLoading(false);
      });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    signup();

    
  };

  return (
    <>
      <Navbar />
      <Box height="90vh" pt={"50px"} className={styles.container}>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          pb="50px"
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

        {isSignup ? (
          <>
            <Box
            width="30%"
              margin="auto"
              height={"500px"}
              p={"20px"}
              
              border={"1px solid black"}
            >
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="100%"
                borderRadius="10px"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Signup Successful !
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                Thanks for signing to our application you will be redirect to Home page in 3s
                </AlertDescription>
              </Alert>
            </Box>
          </>
        ) : (
          <>
            <Box
              // border={"5px solid black"}
              width="30%"
              margin="auto"
              height={"500px"}
              p={"20px"}
            >
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"space-between"}
                flexWrap="wrap"
                pb={"10px"}
              >
                <h1>Signup</h1>
                <Link style={{ color: "blue" }} to="/login">
                  Already have an Account ?
                </Link>
              </Box>
              <Box
                display={"flex"}
                // alignItems=''
                flexDirection={"column"}
                width="100%"
                justifyContent={"center"}
                gap="10px"
                pb={"20px"}
              >
                <Input
                  onChange={handleInput}
                  name="name"
                  placeholder="Enter Full Name"
                />
                <Input
                  onChange={handleInput}
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                />

                <Input
                  onChange={handleInput}
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                />
                {error ? (
                  <>
                    <Alert status="error">
                      <AlertIcon />
                      There was an error processing your request! Please Refresh
                      Page
                    </Alert>
                  </>
                ) : (
                  <>
                    <Button isLoading={loading} onClick={handleSignup}>
                      Sign Up
                    </Button>
                  </>
                )}
              </Box>
              <Box>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-between"}
                  pb="20px"
                >
                  <Divider w="30%" bg={"black"} h={"1px"} borderRadius="10px" />
                  <p style={{ w: "30.33%" }}>Or Continue With ...</p>
                  <Divider w="30%" bg={"black"} h={"1px"} borderRadius="10px" />
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"space-evenly"}
                columnGap="5px"
              >
                <Button
                  className={styles.btn}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  {" "}
                  <FcGoogle /> Google
                </Button>
                <Button className={styles.btn}>
                  {" "}
                  <FaGithub /> Github
                </Button>
                <Button className={styles.btn}>
                  {" "}
                  <FaFacebookSquare /> Facebook
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
