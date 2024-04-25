import {  Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'

export default function CategoryPage() {
    const category = useSelector(state => state.product.category)
    console.log(category);
  return (
    <Box w="full" h="">
    <Heading ml="10px" mt="1rem" fontSize="2xl" fontWeight="700" >Category: <Text display="inline-block" fontWeight="400" >{category[0].category}</Text></Heading>
    <SimpleGrid mt="10px" p="10px" spacing="6px" minChildWidth="300px">
      {category.map((item) => (<ProductCard key={item.id} item={item}/>))}
    </SimpleGrid>
    </Box>
  )
}
