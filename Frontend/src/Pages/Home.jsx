import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container ,Box, Center } from '@chakra-ui/react'
import { Navbar } from '../Components/Navbar'
import { useDispatch,useSelector } from 'react-redux'
import { fetchHomeData } from '../Redux/Home/action.home'
import { LoadingCard } from '../Components/LoadingCard'
import axios from 'axios'
export const Home = () => {
  const dispatch = useDispatch();
  const {loading, error, home} = useSelector((store)=>store)

  useEffect(() => {
    dispatch(fetchHomeData({}))
  }, [])
 
  console.log(home)
  if (loading) {
    return (<Center
    maxW={'80%'}
    
    >
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
    </Center>)
  }
  if (error) {
    return (
      <Box
      display={'flex'}
      alignItems='center'
      justifyContent={'center'}
      height='90vh'
      >
        <img src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif" alt="" />
      </Box>
    )
  }
  return (
    <>
      <Navbar/>
      <Container
          
          display='flex'
          flexWrap='wrap'
          pt='80px'
          pb='80px'
          gap='20px'
      maxW='80%'>
          {
              home?.map((e) => (
                  <Box 
                //   border='1px solid black'
                      w='300px'
                      minH='300px'
                      textAlign='center'
                      boxShadow='2xl'
                        key={e._id}>
                      <img width={'100%'} src={e.image} alt="" />
                      <h3>Name: {e.name}</h3>
                      <p>Location: {e.location }</p>
                      <p>Hostel Type: {e.type }</p>
                      <p>Total Seats: {e.total_seats }</p>
                      <p>Rs {e.price }</p>
                      <p>Rating: {e.rating }</p>
                  </Box>
              ))
            }
      </Container>
      </>
  )
}
