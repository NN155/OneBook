const RoomServices = require('../../services/roomServices');
const uploadToCloudinary = require('../../services/imageService');


class RoomController {
    async createRoom(req, res) {
        const { name, type, price } = req.body;
        try {
            const imageUrl = await uploadToCloudinary(req.file.path, {
                folder: 'rooms'
            });
            const room = await RoomServices.create({ name, type, price, imageUrl });
            return res.json(room);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    async getRooms(req, res) {
        try {
            const rooms = await RoomServices.get();
            return res.json(rooms);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new RoomController();
