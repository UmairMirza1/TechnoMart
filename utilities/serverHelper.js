const { uploadImage } = require("./cloudinary");

const response = (res, status, success, message, payload) => {
  return res.status(status).json({
    success: success,
    message: message,
    payload: payload,
  });
};

const randomDelay = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

const uploadToCloudinary = async (req, image) => {
  await randomDelay();
  const uploaded = await uploadImage(image, "TechnoMart", req.body.category);

  return (imageData = {
    publicID: uploaded.public_id,
    url: uploaded.secure_url,
  });
};

module.exports = { response, uploadToCloudinary };
