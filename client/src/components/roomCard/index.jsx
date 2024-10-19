import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export const RoomCard = ({ room }) => {
    const cardStyles = {
        p: 4,
        borderRadius: "md",
        boxShadow: "md",
        bg: "white",
        _hover: { boxShadow: "lg", transform: "scale(1.05)" },
        transition: "transform 0.2s ease-in-out",
    };

    return (
        <Box sx={cardStyles}>
            <Image src={room.image} alt={room.name} borderRadius="md" />
            <Heading size="md" mt={2}>
                {room.name}
            </Heading>
            <Text mt={2}>{room.description}</Text>
            <Flex justifyContent="center" mt={4}>
                <NavLink to={`/room/${room.id}`} style={{ textDecoration: 'none' }}>
                    <Box
                        px={4}
                        py={2}
                        borderRadius="md"
                        bg="blue.500"
                        color="white"
                        _hover={{ bg: "blue.600" }}
                    >
                        View Room
                    </Box>
                </NavLink>
            </Flex>
        </Box>
    )
};