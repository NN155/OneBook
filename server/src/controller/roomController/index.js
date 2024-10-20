const cloudinary = require('cloudinary').v2;
const RoomServices = require('../../services/roomServices');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

class RoomController {
    async createRoom(req, res) {
        const { name, type, price, image } = req.body;
        try {
            const room = await RoomServices.create({ name, type, price, image });
            return res.json(room);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    async getRooms(req, res) {
        try {
            const rooms = await RoomServices.getRooms();
            return res.json(rooms);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new RoomController();
