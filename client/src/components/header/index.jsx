import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <Box bg="gray.200" py={4}>
            <Flex justifyContent="center">
                <Heading as="h1" size="lg">
                    <NavLink to="/">Rooms</NavLink>
                    <NavLink to="create">Create</NavLink>
                </Heading>
            </Flex>
        </Box>
    );
};

export default Header;