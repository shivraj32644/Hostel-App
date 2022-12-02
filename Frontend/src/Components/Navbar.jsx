import React from 'react'
import { Box } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <Box
      display={'flex'}
      alignItems='center'
      height={'60px'}
      boxShadow='outline'
      justifyContent={'space-evenly'}
    
    >
      <NavLink to='/'>
          Home
      </NavLink>
      <NavLink to='/register'>
          Signup
      </NavLink>
      <NavLink to='/login'>
          Login
      </NavLink>
      </Box>
  )
}
