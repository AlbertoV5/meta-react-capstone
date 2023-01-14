import { 
    Heading, HStack, Text, VStack, Image, Spacer,
    Tabs, TabList, TabPanels, Tab, TabPanel, Select,
    Progress
} from '@chakra-ui/react'
import React, { useState } from 'react'

import SectionBase from '../section/SectionBase'
import TableForm from "./form/TableForm"
import CustomerForm from './form/CustomerForm'
import DetailsForm from './form/DetailsForm'
import ConfirmForm from './form/ConfirmForm'

import { useBookingContext } from './BookingContext'


const BookingSection = () => {
    const [formProgress, setFormProgress] = useState(0);
    const [booking, setBooking] = useBookingContext();
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (i) => {
        setFormProgress((p) => (i)*34)
        setTabIndex(i)
    }

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
                    <Text fontSize={"lg"} py={"0.5em"}>Find a table for any ocassion.</Text>
                    <Progress value={formProgress} colorScheme={"purple"} size="sm"/>
                    <Tabs
                        index={tabIndex}
                        onChange={handleTabChange}
                        variant={"enclosed"}
                        colorScheme={"purple"}
                        py={"0.5em"}
                    >
                        <TabList>
                            <Tab isDisabled={!booking.stage.table}>Table</Tab>
                            <Tab isDisabled={!booking.stage.customer}>Info</Tab>
                            <Tab isDisabled={!booking.stage.details}>Detail</Tab>
                            <Tab isDisabled={!booking.stage.confirm}>Book</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <TableForm handleTabChange={handleTabChange}></TableForm>
                            </TabPanel>
                            <TabPanel>
                                <CustomerForm handleTabChange={handleTabChange}></CustomerForm>
                            </TabPanel>
                            <TabPanel>
                                <DetailsForm handleTabChange={handleTabChange}></DetailsForm>
                            </TabPanel>
                            <TabPanel>
                                <ConfirmForm handleTabChange={handleTabChange}></ConfirmForm>
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