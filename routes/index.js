const express = require("express");
const { auth0Middleware } = require("../middlewares/auth0");
const registerUser = require("../middlewares/registerUser");
const privateRoutes = require("./privateRoutes");

const router = express.Router();

router.use("/private", auth0Middleware, registerUser, privateRoutes);

module.exports = router;
