import { Box, Button, FormControl, FormLabel, Input, Select, VStack, Heading, Tooltip, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { RoomService } from "../../services";
import { useNavigate } from "react-router-dom";

const roomTypes = [
  { value: "standard", label: "Standard", description: "Standard room with basic amenities" },
  { value: "luxury", label: "Luxury", description: "Enhanced room with additional services" },
  { value: "suite", label: "Suite", description: "Room suite with separate living and sleeping areas" },
  { value: "deluxe", label: "Deluxe", description: "Room with upgraded comfort and better location" },
  { value: "family", label: "Family", description: "Family room with multiple sleeping areas" },
  { value: "single", label: "Single", description: "Single room for one guest" },
  { value: "double", label: "Double", description: "Double room with one large bed or two separate beds" },
  { value: "presidential_suite", label: "Presidential Suite", description: "Most luxurious room with exclusive amenities" },
  { value: "studio", label: "Studio", description: "Room with a small kitchen, ideal for long stays" },
  { value: "penthouse", label: "Penthouse", description: "Elite room on the top floor with a great view" },
];

const CreateRoomForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: '',
    image: null  // зберігатимемо файл тут
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
          setFileName(file.name); // Store the file name in state
      } else {
          setFileName(''); // Reset the file name if nothing is selected
      }

      setFormData({
        ...formData,
        image: file // зберігаємо вибраний файл
      });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("type", formData.type);
    form.append("price", formData.price);
    if (formData.image) {
      form.append("image", formData.image); // додаємо файл у FormData
    }
    await RoomService.createRoom(form);
    navigate('/');
  }



  return (
    <Box p={8} maxWidth="500px" mx="auto" bg="gray.100" borderRadius="md" boxShadow="md">
      <Heading textAlign="center" mb={6}>
        Create a New Room
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter room name"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Type</FormLabel>
            <Select
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Select room type"
            >
              {roomTypes.map((room) => (
                <Tooltip key={room.value} label={room.description} aria-label="A tooltip">
                  <option value={room.value}>{room.label}</option>
                </Tooltip>
              ))}
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <Input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter room price"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Image</FormLabel>
            <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange} // Handler for file selection
                display="none" // Hides the default input
                id="file-upload" // Unique identifier for association
            />
            <Flex alignItems="center" mt={2}>
                <Button as="label" htmlFor="file-upload" variant="outline">
                    Choose File
                </Button>
                <Text
                    ml={2}
                    color="gray.500"
                    whiteSpace="nowrap" // Prevent line break
                    overflow="hidden" // Hide overflow
                    textOverflow="ellipsis" // Show ellipsis for overflow text
                    maxWidth="200px" // Set a maximum width
                >
                    {fileName}
                </Text>
            </Flex>
        </FormControl>

          <Button type="submit" colorScheme="blue" width="full">
            Create Room
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateRoomForm;
