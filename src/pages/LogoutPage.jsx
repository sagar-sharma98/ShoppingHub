import { Box, Card, CardBody, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../firebase-auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productAction } from "../store/product-slice";

export default function LogoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(productAction.LoginSuccess(false));
    signOut(firebaseAuth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <Box w="100%">
        <Card maxW="md" maxH="l" mx="auto" my="8rem" borderColor="gray.400">
          <CardBody>
            <Heading as="h3" size="lg" my="4px" textAlign="center">
              Are you sure you want to logout?
            </Heading>

            <Button
              alignItems="center"
              w="100%"
              mt="1rem"
              bg="black"
              color="white"
              _hover="none"
              borderRadius="unset"
              onClick={logoutHandler}
            >
              Logout
            </Button>
            <Text textAlign="center" fontSize="sm" pt="4px" fontWeight="light">
              <Link to="/">GO TO HOME PAGE</Link>
            </Text>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
