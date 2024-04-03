import {
  HStack,
  Heading,
  Input,
  Flex,
  Spacer,
  Text,
  List,
  ListItem,
  Avatar
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleLight, PiHeartStraightLight  } from "react-icons/pi";

export default function Navbar() {
  return (
    <Flex m="20px" p="10px" borderBottom="1px grey.200" alignItems="center" justifyContent="center">
      <Link to="/"> <Heading fontSize="3xl" px="10px">Shopping Hub</Heading></Link>
      <Spacer/>
      <List pl="10px"display="flex" gap="40px" >
      <Link to="/"><ListItem>Men</ListItem></Link>
      <Link to="/"><ListItem>Women</ListItem></Link>
      <Link to="/"><ListItem>Kids</ListItem></Link>
      <Link to="/"><ListItem>Electronics</ListItem></Link>
      </List>
      <Spacer />
      <HStack>
        <Input type="text" w="250px" />
        <Text><Link to="/"><Avatar size="sm" src='https://bit.ly/broken-link' /></Link></Text>
        <Text><Link to="/cart" ><PiShoppingCartSimpleLight size={30} fontWeight=""/></Link></Text>
        <Text><Link to="/wishlist"><PiHeartStraightLight size={30}/></Link></Text>
      </HStack>
    </Flex>
  );
}
