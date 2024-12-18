var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  req.oidc.isAuthenticated();
});

module.exports = router;
