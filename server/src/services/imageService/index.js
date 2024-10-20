const cloudinary = require('cloudinary').v2;

async function uploadToCloudinary(path, options = {}) {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const img = await cloudinary.uploader.upload(path, options, function (err, result) {
        if (err) {
            throw new Error(err);
        }
        return result.url;
    });
    return img.url;
}

module.exports = uploadToCloudinary;
