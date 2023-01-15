import MenuLinks from "./links/MenuLinks"

import SectionBase from "./section/SectionBase";

import {Link} from "react-router-dom"

import { HStack, VStack, Image, Spacer, Box, Heading, Text, UnorderedList, ListItem, Wrap } from "@chakra-ui/react";

const Footer = () => {
   return (
    <SectionBase 
      as="footer"
      backgroundColor={"yellow.400"}
   >
      <Wrap
         id="footer-wrapper"
         spacing={"4"}
         align={"stretch"}
         width={{
               base:"100%",
               md:"100%"
         }}
         paddingTop={"1.5em"}
         spacingY={"8"}
      >
         <Image
            width={{
               base:"40%",
               md:"20%"
            }}
            height={"200px"}
            src={"https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"}
            // src="https://www.kyleecooks.com/wp-content/uploads/2019/03/Mini-Lemon-Meringue-Pies-28.jpg"
         ></Image>
         <Spacer></Spacer>
         <Box width={{
            base:"40%",
            md:"20%"
         }}>
            <Heading size="sm">Navigation</Heading>
            <br></br>
            <VStack align={"left"}>
               <Link to="/#hero-section">Home</Link>
               <Link to="/#about-section">About</Link>
               <Link to="/booking">Booking</Link>
               <Link to="/menu">Menu</Link>
               <Link to="/order-online">Order Online</Link>
               <Link to="/login">Login</Link>
            </VStack>       
         </Box>
         <Spacer></Spacer>
         <Box width={{
            base:"40%",
            md:"20%"
         }}>
            <Heading size="sm">Contact</Heading>
            <br></br>
            <VStack align={"left"}>
               <b>5316 Tinker St, Boise, Illinois</b>
               <b>202-555-0114</b>
               <b>contact@example.com</b>
            </VStack>
         </Box>
         <Spacer></Spacer>
         <Box width={{
            base:"40%",
            md:"20%"
         }}>
            <Heading size="sm">Social Media Links</Heading>
            <br></br>
            <VStack align={"left"}>
               <a href="https://twitter.com/" target={"_blank"}>Twitter</a>
               <a href="https://www.instagram.com/" target={"_blank"}>Instagram</a>
               <a href="https://www.youtube.com/" target={"_blank"}>YouTube</a>
            </VStack>
         </Box>
         <Spacer></Spacer>
      </Wrap>
    </SectionBase>
   ) 
}
export default Footer;