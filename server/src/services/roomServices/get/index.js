const Room = require('../../../model/Room');

const get = async () => {
    try {
        const rooms = await Room.find().sort({ price: 1 });
        return rooms;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = get
