import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

export const LoadingCard = () => {
  return (
      <Stack
      w={'250px'}
      
      >
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
    </Stack>
  )
}
