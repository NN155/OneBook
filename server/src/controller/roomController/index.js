const RoomServices = require('../../services/roomServices');

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
