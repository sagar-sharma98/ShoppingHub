import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
import CartModal from "../modal/CartModal";

export default function Cart() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalItem = useSelector((state) => state.cart.totalItem);
  const carts = useSelector((state) => state.cart.cart);

  return (
    <>
      {carts.length > 0 ? (
        <Box m="auto" mt={10} p="10px" maxW="80rem" minH="100vh">
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colSpan="2">
              <Stack spacing={2}>
                <Heading size="lg">YOUR BAG</Heading>
                <Text size="md">{`Total (${totalItem} item) ₹${totalPrice}`}</Text>
                <Text>
                  Item in your bag are not reserved - check out now to make them
                  yours.
                </Text>
              </Stack>
              {carts.length > 0 && <ProductItem />}
            </GridItem>
            <GridItem colSpan="1">
              <CartModal />
              <Stack spacing={2} mt={20} width="full">
                <Heading fontSize="2xl">Order summery</Heading>
                <HStack mt="10px" justifyContent="space-between">
                  <Text>{totalItem}</Text>
                  <Text>{`₹ ${totalPrice}`}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text>Delivery</Text>
                  <Text>Free</Text>
                </HStack>
                <Divider colorScheme="gray" />
                <HStack mt="8px" justifyContent="space-between">
                  <Text fontSize="large" fontWeight="600">
                    Total
                  </Text>
                  <Text
                    fontSize="large"
                    fontWeight="600"
                  >{`₹ ${totalPrice}`}</Text>
                </HStack>
                <Divider colorScheme="gray" />
                <Text fontSize="small">{`(The toal reflects the price of your order, including all duties and taxex)`}</Text>
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      ) : (
        <Box m="auto" mt={10} p="10px" maxW="80rem" minH="100vh">
          <Heading py="10px">Your bag is empty.</Heading>
          <Text>
            Once you add something to your bag - it will appear here. Ready to
            get started?
          </Text>
          <Link to="../">
            <Button
              my="40px"
              width="sm"
              bg="black"
              color="white"
              _hover="none"
              borderRadius="0px"
            >
              GET STARTED
            </Button>
          </Link>
        </Box>
      )}
    </>
  );
}
