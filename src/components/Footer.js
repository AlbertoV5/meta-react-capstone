import SectionBase from "./section/SectionBase";
import {Link} from "react-router-dom"
import { VStack, Image, Spacer, Box, Text, Heading, Wrap } from "@chakra-ui/react";


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
               base:"35%",
               md:"20%"
            }}
            height={"180px"}
            src={"https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"}
            // src="https://www.kyleecooks.com/wp-content/uploads/2019/03/Mini-Lemon-Meringue-Pies-28.jpg"
         ></Image>
         <Spacer></Spacer>
         <Box width={{
            base:"35%",
            md:"20%"
         }}>
            <VStack align={"left"}>
               <Heading size="sm">Navigation</Heading>
               <Link to="/#hero-section">Home</Link>
               <Link to="/#about-section">About</Link>
               <Link to="/booking">Booking</Link>
               <Link to="/menu">Menu</Link>
               {/* <Link to="/order-online">Order Online</Link> */}
               <Link to="/login">Login</Link>
            </VStack>       
         </Box>
         <Spacer></Spacer>
         <Box width={{
            base:"35%",
            md:"20%"
         }}>
            <VStack align={"left"}>
               <Heading size="sm">Contact</Heading>
               <Text>5316 Tinker St, Boise, Illinois</Text>
               <Text>202-555-0114</Text>
               <Text>contact@example.com</Text>
            </VStack>
         </Box>
         <Spacer></Spacer>
         <Box width={{
            base:"35%",
            md:"20%"
         }}>
            <VStack align={"left"}>
               <Heading size="sm">Social Media</Heading>
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