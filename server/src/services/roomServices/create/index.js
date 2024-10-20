const Room = require('../../../model/Room');

const create = async (data) => {
    const {name, type, price, imageUrl} = data;
    try{ 
        const room = await Room.create({name, type, price, imageUrl});
        return room;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = create;