import { HStack, Text, VStack } from '@chakra-ui/react'
import { PhoneIcon } from "@chakra-ui/icons";
import React from 'react'

export default function Footer() {
  return (
    <VStack as="footer" bg="black" maxW="full" h="8rem" color="white" gap="10px" justifyContent="center">
        <HStack fontSize="small">
       
        <Text> <PhoneIcon mr="4px" boxSize="10px"/>Questions? 1800 000 8800</Text>
        <Text>|</Text>
        <Text>8AM-8PM, 7 days a week</Text>
        </HStack>
        <Text fontSize="x-small">Privacy Statement | Terms and Conditions</Text>
        <Text fontSize="x-small">&#169; 2024 Shopping Hub India Marketing Private Limited</Text>
      
    </VStack>
  )
}
