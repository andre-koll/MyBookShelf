'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { Box, Center, Spinner, Text } from "@chakra-ui/react"

export default function LoadingSpinner() {
  return (
    <>
      <ChakraProvider>
      <Box pos="absolute" inset="0" bg="bg/80">
        <Center h="full">
          <Spinner color="colorPalette.600" />
          <Text color="colorPalette.600">Loading...</Text>
        </Center>
      </Box>
      </ChakraProvider>
    </>
  )
}
