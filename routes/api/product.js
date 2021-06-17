const express = require("express");
const router = express.Router();

const { uploadImage } = require("../../utilities/cloudinary");

const Product = require("../../models/Product");

router.post("/", async (req, res) => {
  try {
    const createProduct = {};
    createProduct.title = req.body.title;
    createProduct.description = req.body.description;
    createProduct.price = req.body.price;
    createProduct.category = req.body.category;

    const image = await uploadImage(req.body.image, "TechnoMart");
    createProduct.image = {};
    createProduct.image.publicID = image.public_id;
    createProduct.image.url = image.secure_url;

    let product = new Product(createProduct);
    await product.save();

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
