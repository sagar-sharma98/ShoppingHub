import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Divider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function HomePage() {



  return (
    <Box>
      <Navbar />
      <Divider/>
      <Outlet />
      <Footer />
    </Box>
  );
}
