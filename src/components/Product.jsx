import { Box, Grid, GridItem, Heading, Image, HStack, Text, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { cartAction } from '../store/cart-slice';

export default function Product() {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  
  const addBagHandler = () => {
    const productDetail = {
      image: product.image,
      title: product.title,
      price: product.price,
      id: product.id,
    }
    dispatch(cartAction.addCart(productDetail));
    console.log("product detail sent");
  }


  return (
    <Grid mx={20} my={5} gap={10} templateColumns="repeat(3, 1fr)">
        <GridItem colSpan="1">
            <Image src={product.image} objectfit="cover" width="400px"/>
        </GridItem>
        <GridItem colSpan="2" >
           <VStack spacing={4} alignItems="start">
           <Heading fontWeight="light">{product.title}</Heading>
            <Text>{`₹ ${product.price}`} <span>inclusive all the texes</span></Text>
            <Text>Select color</Text>
            <HStack>
            <Box w="50px" h="50px" bg="blue.800"></Box>
            <Box w="50px" h="50px" bg="red.800"></Box>
            <Box w="50px" h="50px" bg="orange.800"></Box>
            <Box w="50px" h="50px" bg="green.800"></Box>
            </HStack>
            <Text>Select size</Text>
            <HStack>
            <Box w="50px" h="50px" >1</Box>
            <Box w="50px" h="50px">2</Box>
            <Box w="50px" h="50px" >3</Box>
            <Box w="50px" h="50px" >4</Box>
            </HStack>
           </VStack>
           <Link to="../cart"><Button w="400px" h="50px" bg="black" color="white" _hover="none" borderRadius="0px" onClick={addBagHandler}>Add to bag</Button></Link>
        </GridItem>
    </Grid>
  )
}
