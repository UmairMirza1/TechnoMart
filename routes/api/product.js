const express = require("express");
const router = express.Router();

const { response } = require("../../utilities/serverHelper");
const { uploadImage } = require("../../utilities/cloudinary");

const Product = require("../../models/Product");

router.post("/", async (req, res) => {
  try {
    const createProduct = {};
    createProduct.title = req.body.title;
    createProduct.description = req.body.description;
    createProduct.price = req.body.price;
    createProduct.category = req.body.category;
    createProduct.quantity = req.body.quantity;

    const image = await uploadImage(
      req.body.image,
      "TechnoMart",
      req.body.category
    );
    createProduct.image = {};
    createProduct.image.publicID = image.public_id;
    createProduct.image.url = image.secure_url;

    let product = new Product(createProduct);
    await product.save();

    return response(
      res,
      200,
      true,
      `${req.body.title} added to ${req.body.category} successfully.`
    );
  } catch (error) {
    console.log(error);
    return response(res, 500, false, "Internal server error occurred.");
  }
});

router.post("/quantity", async (req, res) => {
  const product = await Product.findOne({ title: req.body.title });
  const before = product.quantity;
  const after = product.quantity + req.body.amount;
  if (after < 0)
    return response(res, 401, false, "Cannot decrease quantity below 0.");

  product.quantity = after;
  await product.save();

  return response(
    res,
    200,
    true,
    `${req.body.title}'s quantity: before= ${before}, after= ${product.quantity}.`
  );
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ date: -1 });

    if (products.length === 0) {
      return response(res, 404, false, "No products found.");
    }

    return response(
      res,
      200,
      true,
      "All products fetched successfully.",
      products
    );
  } catch (error) {
    console.log(error);
    return response(res, 500, false, "Internal server error occurred.");
  }
});

router.get("/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category }).sort(
      {
        date: -1,
      }
    );

    if (products.length === 0) {
      return response(res, 404, false, `No ${req.params.category} found.`);
    }

    return response(
      res,
      200,
      true,
      `All ${req.params.category} fetched successfully.`,
      products
    );
  } catch (error) {
    console.log(error);
    return response(res, 500, false, "Internal server error occurred.");
  }
});

module.exports = router;
