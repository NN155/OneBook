const RoomServices = require('../../services/roomServices');

class RoomController{
    async createRoom(req, res){
        const { name, type, price } = req.body;
        const room = await RoomServices.create({ name, type, price });
        return res.json(room);
    }
    async getRooms(req, res){
        const rooms = await RoomServices.getRooms();
        return res.json(rooms);
    }
}

module.exports = new RoomController();
