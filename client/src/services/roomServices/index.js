import axios from 'axios';

class RoomService {
    constructor() {
        this.apiUrl = process.env.MESSAGE_API_URL; // або вкажіть ваш URL
    }

    // Метод для створення кімнати
    createRoom = async (room) => {
        try {
            const response = await axios.post(`${this.apiUrl}/rooms`, room);
            return response.data; // Повертає дані відповіді сервера
        } catch (error) {
            console.error("Error creating room:", error);
            throw error; // Можна обробити помилку далі
        }
    };

    // Метод для отримання всіх кімнат
    getAllRooms = async () => {
        try {
            const response = await axios.get(`${this.apiUrl}/rooms`);
            return response.data; // Повертає масив кімнат
        } catch (error) {
            console.error("Error fetching rooms:", error);
            throw error; // Можна обробити помилку далі
        }
    };
}

export default RoomService;
