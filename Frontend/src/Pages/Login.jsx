import { Button ,Input} from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Navbar";

export const Login = () => {
  return (
    <>
      <Navbar></Navbar>
          <div>
              <Input placeholder='Enter Email' />
              <Input placeholder='Enter Password' />
              <Button>Login</Button>
          </div>
    </>
  );
};
