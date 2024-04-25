import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  CircularProgress,
  useToast,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase-auth";
import { productAction } from "../store/product-slice";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const loginHandler = async (e) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      dispatch(productAction.LoginSuccess(true));
      navigate("/");
    } catch (error) {
      toast({
        title: "Login failed.",
        description: "Enter the correct email and password, or go to signup.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Box
          w="100vw"
          h="80vh"
          maxW="12px"
          mx="auto"
          py="14rem"
          justifyItems="center"
        >
          <CircularProgress
            position="centre"
            isIndeterminate
            color="gray.700"
          />
        </Box>
      ) : (
        <Box w="100%">
          <Card maxW="md" maxH="l" mx="auto" my="8rem" boxShadow="2xl">
            <CardBody>
              <Heading as="h3" size="lg" my="4px" textAlign="center">
                Login
              </Heading>
              <Divider mt="1rem" />
              <FormControl mt="1rem">
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="text"
                  borderRadius="none"
                  border="1px solid black"
                  _focus={{
                    boxShadow: "none",
                    border: "1px solid black",
                  }}
                  _hover="none"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel mt="4px">Password</FormLabel>
                <Input
                  type="password"
                  borderRadius="none"
                  border="1px solid black"
                  _focus={{
                    boxShadow: "none",
                    border: "1px solid black",
                  }}
                  _hover="none"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  alignItems="center"
                  w="100%"
                  mt="1rem"
                  bg="black"
                  color="white"
                  _hover="none"
                  borderRadius="unset"
                  onClick={loginHandler}
                >
                  Login
                </Button>
                <Text
                  textAlign="center"
                  fontSize="sm"
                  mt="2px"
                  fontWeight="light"
                >
                  NOT REGISTERED USER?{" "}
                  <Link to="/signup">
                    <Text display="inline-block" fontWeight="400">
                      SIGNUP
                    </Text>
                  </Link>
                </Text>
              </FormControl>
            </CardBody>
          </Card>
        </Box>
      )}
    </>
  );
}
