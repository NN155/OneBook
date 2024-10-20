import React from 'react';
import { RoomCard } from '../../components';
import { Box, Grid, Heading } from '@chakra-ui/react';
import RoomService from '../../services/room';

const RoomsPage = () => {
    const [rooms, setRooms] = React.useState([]);
    React.useEffect(() => {
        RoomService.getAllRooms().then((data) => {
            setRooms(data);
        });
    }, []);

    return (
        <Box p={8} bg="gray.100">
            <Heading textAlign="center" mb={8}>
                Available Rooms
            </Heading>
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </Grid>
        </Box>
    );
};

export { RoomsPage };