import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Divider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function HomePage() {

const url = 'https://movies-api14.p.rapidapi.com/home';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '932cd347acmshe2de3d5a01ef416p107551jsn1010a0bd3184',
    'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
  }
};

useEffect(() => {
  const fetchData = async() => {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.log(error); 
    }
  }

  fetchData();
},);

  return (
    <Box>
      <Navbar />
      <Divider/>
      <Outlet />
      <Footer />
    </Box>
  );
}
