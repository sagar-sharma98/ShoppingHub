import {
  HStack,
  Heading,
  Flex,
  Spacer,
  Text,
  List,
  ListItem,
  Avatar
} from "@chakra-ui/react";
import React, {  } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleLight, PiHeartStraightLight  } from "react-icons/pi";
import { productAction } from "../store/product-slice";
import { useSelector } from "react-redux";
import { useDispatch  } from "react-redux";



export default function Navbar() {
  const login = useSelector((state) => state.product.login);
  const dispatch = useDispatch();

  const categoryHandler = (e) => {
   console.log("category handler")
    const typeCategory = e.target.getAttribute('name')
    dispatch(productAction.categoryItemHandler(typeCategory))
  }


  return (
    <Flex m="20px" p="10px" borderBottom="1px grey.200" alignItems="center" justifyContent="center">
      <Link to="/"> <Heading fontSize="3xl" px="10px">Shopping Hub</Heading></Link>
      <Spacer/>
      <List pl="10px"display="flex" gap="40px" >
      <Link to="/category" onClick={categoryHandler} ><ListItem name="men's clothing" >Men</ListItem></Link>
      <Link to="/category" onClick={categoryHandler}><ListItem name="women's clothing">Women</ListItem></Link>
      <Link to="/category" onClick={categoryHandler}><ListItem name="jewelery">Jewelery</ListItem></Link>
      <Link to="/category" onClick={categoryHandler}><ListItem name="electronics">Electronics</ListItem></Link>
      </List>
      <Spacer />
      <HStack>
        
        <Text><Link to={login ? "/logout" : "/login"}> <Avatar  size="sm" src={ !login ? "https://bit.ly/broken-link" : "/image/boy.png"} bg="gray.400"/></Link></Text>
        <Text><Link to="/cart" ><PiShoppingCartSimpleLight size={30} fontWeight=""/></Link></Text>
        <Text><Link to="/wishlist"><PiHeartStraightLight size={30}/></Link></Text>
      </HStack>
    </Flex>
  );
}
