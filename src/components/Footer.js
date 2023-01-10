import MenuLinks from "./links/MenuLinks"

import SectionBase from "./section/SectionBase";

import {Link} from "react-router-dom"

import { HStack, VStack, Image, Spacer, Box, Heading, Text, UnorderedList, ListItem, Wrap } from "@chakra-ui/react";

const Footer = () => {
   return (
    <SectionBase 
      as="footer"
      backgroundColor={"gold"}
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
            src="https://www.kyleecooks.com/wp-content/uploads/2019/03/Mini-Lemon-Meringue-Pies-28.jpg"
         ></Image>
         <Spacer></Spacer>
         <Box width={{
            base:"40%",
            md:"20%"
         }}>
            <Heading size="sm">Doormat Navigation</Heading>
            <br></br>
            <VStack align={"left"}>
               <Link to="/">Home</Link>
               <a href="#about-section">About</a>
               <Link to="/menu">Menu</Link>
               <Link to="/reservations">Reservations</Link>
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
               <Link>Address</Link>
               <Link>Phone Number</Link>
               <Link>Email</Link>
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
               <Link>Twitter</Link>
               <Link>Instagram</Link>
               <Link>YouTube</Link>
            </VStack>
         </Box>
         <Spacer></Spacer>
      </Wrap>
    </SectionBase>
   ) 
}
export default Footer;