import React from 'react';
import { Box, HStack, VStack, Spacer, Text, useColorMode, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaTimes, FaStream } from "react-icons/fa"


/**
* @author Owolabi Oluwatosin Daniel (OOD)
* @function Header
**/

export const Header = (props) => {
    const [show, setShow] = React.useState(false);

    const toggleMenu = () => setShow(!show);

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <VStack
                alignItems="end"
                //changing the colorMode depending whether button is show or not in mobile view
                bg={show && colorMode === "light" ? "#116979" : show && colorMode === "dark" && "#1a202c"} 
            >
                <Box
                    as="span"
                    display={{ base: "block", md: "none" }}
                    px="20px"
                    color={colorMode === "light" && "#116979"}
                    fontSize="xl"
                    //this onClick event toggle the button by calling toggleMenu and set show to true. initially is false
                    onClick={toggleMenu}
                    pt="10px"
                >   
                    {show ?
                        //changing iconButton depending whether show is true or false
                        <IconButton icon={
                            <FaTimes color={show && colorMode === "light" ?
                                "#116979" : show && colorMode === "dark" && "#ffffff"
                            } />
                        } />

                        :
                        <IconButton icon={
                            <FaStream color={!show && colorMode === "light" ?
                                "#116979" : !show && colorMode === "dark" && "#ffffff"
                            } />
                        } />
                    }
                </Box>
            </VStack>

            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                bg={colorMode === "light" && "#116979"}
                boxShadow={colorMode === "light" ? "lg" : colorMode === "dark" && "lg"}
                w="100%" p={4} color="white"
            >
                {
                    //changing iconButton depending whether the app is in light or dark mode
                    show ?
                        <VStack
                            alignItems="end"
                        >
                            <Text>Weather App</Text>
                            <Spacer />
                            <Link to="/">Home</Link>
                            //<Link to="/weather-history">History</Link>
                            <Spacer />
                            {colorMode === "light" ? <FaSun cursor="pointer" onClick={toggleColorMode} /> : <FaMoon cursor="pointer" onClick={toggleColorMode} />}
                        </VStack>
                        :
                        <HStack spacing="24px">
                            <Text>Weather App</Text>
                            <Spacer />
                            <Link to="/">Home</Link>
                            //<Link to="/weather-history">History</Link>
                            {colorMode === "light" ? <FaSun cursor="pointer" onClick={toggleColorMode} /> : <FaMoon cursor="pointer" onClick={toggleColorMode} />}
                        </HStack>
                }

            </Box>
        </>
    )

}

