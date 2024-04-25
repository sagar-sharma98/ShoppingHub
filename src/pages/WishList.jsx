import {
  Image,
  Text,
  Card,
  SimpleGrid,
  Button,
  VStack,
  CardHeader,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../store/product-slice";
import { fetchData } from "../store/product-slice";

export default function WishList() {
  const dispatch = useDispatch();
  const wishListPoducts = useSelector((state) => state.product.wishList);

  const imageItemHandler = async (productId) => {
    console.log("image item handler");
    await dispatch(fetchData());
    dispatch(productAction.buyProductBtn(productId));
  };

  const removeHandler = (productId) => {
    dispatch(productAction.wishItemRemoveHandler(productId));
  };
  return (
    <Box minH="100vh">
      {wishListPoducts.length > 0 ? (
        <SimpleGrid p="10px" spacing="10px" minChildWidth="300px">
          {wishListPoducts.map((item) => (
            <Card
              maxW="sm"
              border="1px solid black"
              borderRadius="unset"
              key={item.id}
            >
              <CardHeader>
                <VStack>
                  <Link to="/product" onClick={() => imageItemHandler(item.id)}>
                    <Image src={item.image} objectFit="fill" boxSize="200px" />
                  </Link>
                  <Text pt="10px">{item.title}</Text>
                  <Text>{`₹${item.price * 100}`}</Text>
                </VStack>
              </CardHeader>
              <Button
                mb="10px"
                width="full"
                bg="black"
                color="white"
                _hover="none"
                borderRadius="unset"
                textAlign="center"
                onClick={() => removeHandler(item.id)}
              >
                Remove
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      ) : (
        <Box
          m="auto"
          mt={10}
          p="10px"
          maxW="80rem"
          minH="100vh"
          alignContent="start"
        >
          <Heading py="10px">Your wishlist is empty.</Heading>
          <Text>
            Once you add something to your wishlist - it will appear here. Ready
            to shop?
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
              SHOP NOW
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
