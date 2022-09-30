import React from "react";
import { Link, Box, Flex, Text, Button, Stack, useColorMode,MenuButton,MenuList,Menu, } from "@chakra-ui/react";
import { IoMdMoon,IoMdSunny,IoIosArrowDown} from "react-icons/io";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logout from "./Logout";
import styles from "../AllStyle/Navbar.module.css"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer marginTop="-1.2rem" {...props}>
         <MenuItem to="/">  <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      /></MenuItem>
    
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  
  const [bag,setBag] =useState(false)
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
       className={styles.NavbarContainer}
       color="darkslategray" fontWeight="600" fontSize="13px"
              spacing={3}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavLink
                to="/integrations"
                activeStyle={{
                    fontWeight: "light",
                    color: "gray"

                }}
                >
              INTEGRATIONS
            </NavLink>
    
        {/* <MenuItem to="/integrations">INTEGRATIONS </MenuItem> */}
        {/* <MenuItem to="/blog">BLOG </MenuItem> */}
     
        <NavLink
                to="/blog"
                activeStyle={{
                    fontWeight: "light",
                    color: "gray"
                }}
                >
             BLOG
            </NavLink>

        {/* <MenuItem to="/features"> */}
        
        <Menu>
                <MenuButton
                    // px={4}
                    // py={2}
                    display="flex"
                    transition='all 0.2s'
                    borderRadius='md'
                    fontWeight="600"
                    // borderWidth='1px'
                    _hover={{ bg: 'gray.400' }}
                    // _expanded={{ bg: 'blue.400' }}
                    // _focus={{ boxShadow: 'outline' }}
                >
                    <Flex> <Box marginRight="5px">{"FEATURES"}</Box> 
                    <Box marginTop="5px" ><IoIosArrowDown /></Box></Flex>
                   
                     
                </MenuButton>
                <MenuList fontWeight="800" fontSize="16px"  textAlign="left" paddingLeft="1.4rem">
                    <MenuItem to="tracker">Time Tracker</MenuItem>
                    <br />
                    <br />
                    <MenuItem to="management">Project Management</MenuItem>
                    <br />
                    <br />
                    <MenuItem to="timesheet" >Online Timesheet</MenuItem>
                    <br />
                    <br />
                    <MenuItem to="cards">Time Cards</MenuItem>
                    <br />
                    <br />
                    <MenuItem to="attendance" >Attendance Tracking</MenuItem>
                    <br />
                    <br />
                    <MenuItem to="reporting" >Time Reporting</MenuItem>
                    <br />
                </MenuList>
        </Menu>
         {/* </MenuItem> */}

        <MenuItem to="/login" isLast>
        {/* <Button colorScheme='teal' variant='outline'> */}
          <Button
            size="sm"
            height="2.5rem"
            width="8rem"
            border="1px solid black"
            rounded="lg"
            // colorScheme='teal'
            color={["black", "primary.500", "black", "black"]}
            // bg={["#805AD5", "purple.600", "primary.500", "primary.500"]}
            _hover={{
              color:"white",
              bg:"purple"
            }}
          >
           TRY IT FREE
          </Button>
        </MenuItem>

        <MenuItem to="/login" isLast>
        {/* <Button colorScheme='teal' variant='outline'> */}
         { bag? (<Button
           gotoHome={()=>setBag(true)}
            size="sm"
            height="2.5rem"
            width="7.5rem"
            border="1px solid black"
            rounded="lg"
            // colorScheme='teal'
            color={["white", "primary.500", "white", "blwhiteack"]}
            bg="purple"
            _hover={{
                color:"black",
              bg:"white"
            }}
          >
           LOGIN
          </Button>):<Logout  
           />}

        </MenuItem>

        {/* <MenuItem >
        <Logout/>
        </MenuItem> */}
       
       <MenuItem><ThemeButton/></MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export function ThemeButton() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
    <header>
        <Button onClick={toggleColorMode} 
        backgroundColor="#f6f8f9"
        color=" purple" >
          {colorMode === 'light' ? <IoMdMoon/> : <IoMdSunny/>}
        </Button>
    </header>
    )
  }

export default NavBar;