import { RoomCard } from '../../components';
import { Box, Grid, Heading } from '@chakra-ui/react';

const RoomsPage = () => {
    const rooms = [
      { id: 1, name: 'Living Room', description: 'A cozy living room', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Bedroom', description: 'A quiet bedroom', image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Kitchen', description: 'A modern kitchen', image: 'https://via.placeholder.com/150' },
    ];

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