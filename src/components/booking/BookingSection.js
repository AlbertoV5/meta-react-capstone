import { 
    Heading, HStack, Text, VStack, Image, Spacer,
    Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button,
    Progress
} from '@chakra-ui/react'
import React, { useState } from 'react'

import SectionBase from '../section/SectionBase'
import BookingForm from "./BookingForm"
import CustomerForm from './CustomerForm'

import { ArrowForwardIcon } from '@chakra-ui/icons'


const BookingSection = () => {
    const [formProgress, setFormProgress] = useState(25);

    return (
        <SectionBase id="booking-section">
            <HStack width={{
                base:"100vw",
                md:"100vw"
            }}>
                <Spacer></Spacer>
                <VStack
                    id="booking-header"
                    spacing={"4"}
                    align={"stretch"}
                    width={{
                        base:"100%",
                        md:"70%"
                    }}
                    py={"4"}
                    justify={"center"}
                >
                    <Heading textAlign={"left"} size="2xl">Little Lemon</Heading>
                    <Heading textAlign={"left"} size="md">Chicago</Heading>
                    <Text fontSize={"lg"}>Find a table for any ocassion.</Text>
                    <Progress value={formProgress} colorScheme={"gray"} />
                    <HStack>
                        <Image></Image>
                        <Image></Image>
                    </HStack>
                    <Tabs onChange={(i) => {setFormProgress((p) => (i)*33)}}>
                        <TabList>
                            <Tab>Table</Tab>
                            <Tab>Customer</Tab>
                            <Tab>Confirm</Tab>
                            <Tab>Done</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <BookingForm></BookingForm>
                            </TabPanel>
                            <TabPanel>
                                <CustomerForm></CustomerForm>
                                <Box width={"100%"} align={"center"} paddingTop={"2em"}>
                                    <Button 
                                        colorScheme={"yellow"} 
                                        width={"200px"}
                                        disabled
                                    >Continue<ArrowForwardIcon/></Button>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Text>Confirm</Text>
                                <Button 
                                    colorScheme={"yellow"} 
                                    width={"200px"}
                                    disabled
                                >Continue<ArrowForwardIcon/></Button>
                            </TabPanel>
                            <TabPanel>
                                Done
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </VStack>
                <Spacer></Spacer>
            </HStack>
        </SectionBase>
    )
}

export default BookingSection