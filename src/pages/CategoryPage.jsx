import { Box, Heading, SimpleGrid, Text, VStack, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/product-slice";
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log("category page selector", product);

  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);
  return (
    <Box w="full" h="">
      <Heading ml="10px" mt="1rem" fontSize="2xl" fontWeight="700">
        Category:{" "}
        <Text display="inline-block" fontWeight="400">
          men
        </Text>
      </Heading>
      <SimpleGrid mt="10px" p="10px" spacing="6px" minChildWidth="300px">
        {product && product.category && product.category.length > 0 ? (
          product.category.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
          <Box w="100vh" h="60vh" mx="auto"  display="flex"  justifyContent="center" alignItems="center">
            <VStack mt="-8rem">
            <Text fontSize="xl" >Unable to load the data</Text>
            <Link to="/"><Text textDecorationLine="underline"> Go to home page</Text></Link>
            </VStack>
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
}
