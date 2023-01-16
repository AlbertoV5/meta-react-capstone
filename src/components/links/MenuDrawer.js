import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react"
import MenuLinks from "./MenuLinks"


const MenuDrawer = ({isOpen, onOpen, onClose}) => {
  return (
    <Drawer 
        placement={"top"} 
        onClose={onClose} 
        isOpen={isOpen}
    >
        <DrawerOverlay/>
        <DrawerContent>
            {/* <DrawerHeader>
                Little Lemon
            </DrawerHeader> */}
            <DrawerBody>
                <MenuLinks isVertical={true}/>
            </DrawerBody>
            <DrawerCloseButton/>
        </DrawerContent>
    </Drawer>
  )
}

export default MenuDrawer