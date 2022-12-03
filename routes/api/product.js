const express = require("express");
const router = express.Router();
const dayjs = require("dayjs");
// dayjs().format();

const {
  response,
  uploadToCloudinary,
} = require("../../utilities/serverHelper");

const Product = require("../../models/Product");
const Highlight = require("../../models/Highlight");
const Order = require("../../models/Order");

router.post("/", async (req, res) => {
  try {
    const createProduct = {};
    createProduct.title = req.body.title;
    createProduct.description = req.body.description;
    createProduct.price = req.body.price;
    createProduct.category = req.body.category;
    createProduct.quantity = req.body.quantity;
    createProduct.images = [];

    const promiseArray = req.body.images.map((image) =>
      uploadToCloudinary(req, image)
    );
    const result = await Promise.all(promiseArray);

    createProduct.images = createProduct.images.concat(result);

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

//quantity update==
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

router.get("/all", async (req, res) => {
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

router.get("/single/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return response(res, 401, false, "Product not found.");

    return response(res, 200, true, "Product fetched successfully.", product);
  } catch (error) {
    console.log(error);
    return response(res, 500, false, "Internal server error occurred.");
  }
});

router.get("/category/:category", async (req, res) => {
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

router.get("/search/:term", async (req, res) => {
  try {
    const products = await Product.find({
      title: { $regex: req.params.term, $options: "i" },
    }).sort({
      date: -1,
    });

    if (products.length === 0) {
      return response(
        res,
        404,
        false,
        `No products named ${req.params.term} found.`
      );
    }

    return response(
      res,
      200,
      true,
      `All '${req.params.term}' named products fetched successfully.`,
      products
    );
  } catch (error) {
    console.log(error);
    return response(res, 500, false, "Internal server error occurred.");
  }
});

router.get("/highlights", async (req, res) => {
  try {
    const highlight = await Highlight.findOne();
    console.log("highlight1", highlight);
    if (highlight.length === 0 || !highlight) {
      console.log("highlight1", highlight);
      const products = await Product.aggregate().sample(4);
      createHighlights = {};
      createHighlights.products = products;

      let highlights = new Highlight(createHighlights);
      await highlights.save();

      return response(
        res,
        200,
        true,
        "Highlights added successfully.",
        highlights
      );
    }
    const currentDate = dayjs(new Date());
    const highlightDate = dayjs(highlight.date);

    if (currentDate.isSame(highlightDate, "day")) {
      return response(
        res,
        200,
        true,
        "Highlights fetched successfully.",
        highlight.products
      );
    }

    if ((currentDate.isAfter(highlightDate), "day")) {
      await highlight.remove();

      const products = await Product.aggregate().sample(4);
      createHighlights = {};
      createHighlights.products = products;

      let newHighlights = new Highlight(createHighlights);
      await newHighlights.save();

      return response(
        res,
        200,
        true,
        "Highlights added successfully.",
        newHighlights.products
      );
    }
  } catch (error) {
    console.log(error);
    return response(res, 500, false, "Internal server error occurred.");
  }
});

router.post("/order", async (req, res) => {
  try {
    const createOrder = {};
    createOrder.order = req.body.order;

    const order = new Order(createOrder);
    await order.save();

    return response(res, 200, true, "Order added successfully.", order._id);
  } catch (error) {
    console.log(error);
    return response(res, 500, false, "Internal server error occurred.");
  }
});

module.exports = router;
