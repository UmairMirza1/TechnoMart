const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Connect to Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });

cloudinary.config({
  cloud_name: "technomart",
  api_key: "444665926828849",
  api_secret: "B-VQTq1CZWmCFtpuTLH4nOFvaKg",
});
const uploadImage = async (image, preset, folder) => {
  try {
    const uploaded = await cloudinary.uploader.upload(
      image,
      {
        upload_preset: preset,
        folder: `${preset}/${folder}`,
      },
      (err, result) => {
        if (err) return console.log(err);
      }
    );
    console.log("her1");
    const { public_id, secure_url } = uploaded;
    const reply = {
      public_id,
      secure_url,
    };

    return reply;
  } catch (err) {
    console.log("her2");
    return console.log("Cloudinary server error.");
  }
};

const deleteImage = async (id) => {
  try {
    await cloudinary.uploader.destroy(id, (err, result) => {
      if (err) return console.log(err);
    });
  } catch (err) {
    return console.log("Cloudinary server error.");
  }
};

module.exports = {
  uploadImage,
  deleteImage,
};
