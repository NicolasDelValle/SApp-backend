const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/store", projectController.store);
router.post("/edit", projectController.edit);

module.exports = router;
