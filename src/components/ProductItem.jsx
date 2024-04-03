import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CloseButton,
  Divider,
  HStack,
  Image,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";

export default function ProductItem() {
  const carts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(carts);

  const deleteItemHandler = (id) => {
    dispatch(cartAction.deleteCartItem(id));
  };
  return (
    <>
      {carts.length > 0 &&
        carts.map((item) => (
          <Card
            maxW="2xl"
            mt={10}
            gap={4}
            direction={{ base: "column", sm: "row" }}
            boxSizing="border-box"
            border="1px solid black"
            borderRadius="unset"
          >
            <Image
              src={item.image}
              alt="photo"
              objectFit="fill"
              maxW="200px"
              ms="4px"
              
            />
            <Divider  color="black" orientation="vertical"/> 
            <Stack  w="100%">
              <CardBody>
                <HStack
                  alignItems="start"
                  gap={4}
                  fontSize="lg"
                  justifyContent="space-between"
                >
                  <Text>{item.title}</Text>
                  <Spacer />
                  <Text>{item.price}</Text>
                  <CloseButton onClick={() => deleteItemHandler(item.id)} />
                </HStack>
                <Text pt="10px">Size: 6</Text>
                <HStack spacing={2}>
                  <Text alignItems="space-between">Color:</Text>
                  <Box
                    width="40px"
                    height="40px"
                    bg="blue.800"
                    display="inline-block"
                  ></Box>
                </HStack>
              </CardBody>
              <CardFooter>
                <Select size="lg" maxW="100px" placeholder="1">
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </CardFooter>
            </Stack>
          </Card>
        ))}
    </>
  );
}
