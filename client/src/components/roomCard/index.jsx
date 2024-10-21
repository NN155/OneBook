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
        <Box sx={cardStyles} display="flex" flexDirection="column" justifyContent="space-between">
            <Box>
                <Image
                    src={room.imageUrl}
                    alt={room.name}
                    borderRadius="md"
                    w="250px"
                    h="175px"
                    objectFit="cover"
                    mx="auto"
                />
                <Heading size="md" mt={2}>
                    {room.name}
                </Heading>
                <Text mt={2}>{room.description}</Text>
                <Text mt={2}>Price: ${room.price}/night</Text>
                <Text mt={2}>Type: {room.type}</Text>
                <Text mt={2}>Status: {room.status}</Text>
            </Box>
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
                        More
                    </Box>
                </NavLink>
            </Flex>
        </Box>
    )
};