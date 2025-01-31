const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message:
      "Hello from a public endpoint! You don't need to be authenticated to see this.",
  });
});

module.exports = router;
