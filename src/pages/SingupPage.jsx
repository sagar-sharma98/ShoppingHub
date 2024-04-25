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
  useToast,
  CircularProgress,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase-auth";

export default function SingupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    setLoading(true);
    try {
      const userDetails = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(userDetails);
      localStorage.setItem("token", userDetails.user.accessToken);
      localStorage.setItem("user", JSON.stringify(userDetails.user));
      navigate("/login");
    } catch (error) {
      toast({
        title: "Signup failed.",
        description: "Please enter the correct details.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
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
          <Card maxW="md" maxH="l" mx="auto" my="7rem" boxShadow="2xl">
            <CardBody>
              <Heading as="h3" size="lg" my="4px" textAlign="center">
                Signup
              </Heading>
              <Divider mt="1rem" />
              <FormControl mt="1rem">
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  borderRadius="none"
                  border="1px solid black"
                  _focus={{
                    boxShadow: "none",
                    border: "1px solid black",
                  }}
                  _hover="none"
                />
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="text"
                  id="email"
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
                  id="password"
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
                  onClick={signupHandler}
                >
                  Signup
                </Button>
                <Text
                  textAlign="center"
                  fontSize="sm"
                  mt="2px"
                  fontWeight="light"
                >
                  ALREADY REGISTERED?{" "}
                  <Link to="/login">
                    <Text display="inline-block" fontWeight="400">
                      LOGIN
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
