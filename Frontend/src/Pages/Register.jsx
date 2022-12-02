import React from "react";
import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Button ,Input} from "@chakra-ui/react";
export const Register = () => {
    const [userData, setName] = useState()
    
  return (
    <>
      <Navbar />
          <div>
            <Input onChange={(e)=>setName()} placeholder='Enter Name' />
            <Input placeholder='Enter Email' />
              <Input placeholder='Enter Password' />
              <Button  >Login</Button>
          </div>
    </>
  );
};
