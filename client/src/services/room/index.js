import axios from 'axios';

class RoomService {
    constructor() {
        this.apiUrl = process.env.REACT_APP_API_URL + "/rooms"; // або вкажіть ваш URL
    }

    // Метод для створення кімнати
    createRoom = async (form) => {
        try {
            console.log(this.apiUrl)
            const response = await fetch(`${this.apiUrl}/create`, {
                method: 'POST',
                body: form
            });

            const result = await response.json();
            console.log("Room created:", result);
        } catch (error) {
            console.error("Error creating room:", error);
        }
    };

    // Метод для отримання всіх кімнат
    getAllRooms = async () => {
        try {
            const response = await axios.get(`${this.apiUrl}/get`);
            return response.data; // Повертає масив кімнат
        } catch (error) {
            console.error("Error fetching rooms:", error);
            throw error; // Можна обробити помилку далі
        }
    };
}

export default new RoomService();
