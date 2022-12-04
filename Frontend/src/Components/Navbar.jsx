import React from 'react'
import { Box } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const data = [
    {
    to: '/',
    title:"Home"
  },
    {
    to: '/register',
    title:"Signup"
  }
    {
    to: '/about us',
    title:"About Us"
  },
    {
    to: '/contact',
    title:"Contact"
  }
  
  ]
  return (
    <Box
      display={'flex'}
      alignItems='center'
      height={'60px'}
      boxShadow='outline'
      justifyContent={'space-evenly'}
    
    >
      {
        data?.map((e) => (
          <NavLink to={e.to} >
            {e.title}
          </NavLink>
        ))
      }
      
      
      </Box>
  )
}
