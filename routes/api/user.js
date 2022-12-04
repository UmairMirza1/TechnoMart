const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middlewares/auth");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const fs = require("fs");
let multer = require("multer");
let uuidv4 = require("uuid");

var jwtSecret = "mysecrettoken";



module.exports = router;