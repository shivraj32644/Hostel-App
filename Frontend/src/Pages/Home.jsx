import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container ,Box } from '@chakra-ui/react'
import { Navbar } from '../Components/Navbar'
export const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    
   async function fetchData() {
        let res = await fetch(`http://localhost:9020/`)
       let result = await res.json();
       setData(result);
    }
    console.log()
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
          {/* {
              data?.map((e) => (
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
            } */}
      </Container>
      </>
  )
}
