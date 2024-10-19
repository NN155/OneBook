const Room = require('../../../model/Room');

const get = async (priceRange, type) => {
    try {
        const query = {};
        
        if (priceRange) {
            query.price = {
                $gte: priceRange.min,
                $lte: priceRange.max,
            };
        }

        if (type) {
            query.type = type;
        }

        const rooms = await Room.find(query).sort({ price: 1 });
        return rooms;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    get,
    // Інші функції для управління кімнатами (створення, оновлення, видалення)
};
