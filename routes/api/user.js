const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const {
  response
} = require("../../utilities/serverHelper");

var jwtSecret = "mysecrettoken";

router.post("/signup", async (req, res) => {
  try {
    console.log("hitting APi");
    result = await req.body;
    const newUser = {};
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    console.log(newUser);
    let user = new User(newUser);
    await user.save();

    return response(
      res,
      200,
      true,
      `${req.body.name} registered successfully.`
    );
  } catch (error) {
    console.log(error);
    return response(res, 500, false, "Internal server error occurred.");
  }
});

router.post("/signin", async (req, res) => {
	try {

	  console.log("hitting APi");
	  result = await req.body;
	  const newUser = {};
	  newUser.name = req.body.name;
	  newUser.email = req.body.email;
	  newUser.password = req.body.password;
	  console.log(newUser);
	  let user = new User(newUser);
	  await user.save();
  
	  return response(
		res,
		200,
		true,
		`${req.body.name} registered successfully.`
	  );
	} catch (error) {
	  console.log(error);
	  return response(res, 500, false, "Internal server error occurred.");
	}
  });




module.exports = router;
