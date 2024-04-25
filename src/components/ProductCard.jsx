import React from "react";
import {
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { productAction } from "../store/product-slice";
import { Link } from "react-router-dom";
import { PiHeartStraightLight } from "react-icons/pi";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();

  const buyBtnHandler = async (productId) => {
    dispatch(productAction.buyProductBtn(productId));
  };

  const wishListHandler = (productId) => {
    dispatch(productAction.wishListBtn(productId));
  };
  return (
    <>
      <Card
        maxW="md"
        kay={item.id}
        border="0.2px solid #7a7a7a"
        borderRadius="unset"
        key={item.id}
      >
        <CardBody>
          <Link to="/product" onClick={() => buyBtnHandler(item.id)}>
            <Image src={item.image} alt="picture" boxSize="300px" mb="10px" />
          </Link>
          <Heading fontWeight="600" size="md" justifyItems="center" pt="10px">
            {item.title.length > 60
              ? item.title.slice(0, 56) + "..."
              : item.title}
          </Heading>
        </CardBody>
        <Divider color="black" />
        <VStack gap="10px" my="10px">
          <HStack gap="16rem">
            <Text fontSize="lg">{`₹ ${Math.round(item.price * 100)}`}</Text>
            <Link to="/wishlist">
              <PiHeartStraightLight
                size={30}
                onClick={() => wishListHandler(item.id)}
              />
            </Link>
          </HStack>
          <Link
            to="/product"
            style={{ width: "100%" }}
            onClick={() => buyBtnHandler(item.id)}
          >
            <Button
              colorScheme="blue"
              w="full"
              h="40px"
              bg="black"
              color="white"
              _hover="none"
              borderRadius="unset"
            >
              Buy now
            </Button>
          </Link>
        </VStack>
      </Card>
    </>
  );
}
