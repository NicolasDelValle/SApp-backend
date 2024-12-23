const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/store", projectController.store);

module.exports = router;
