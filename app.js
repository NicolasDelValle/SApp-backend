require("dotenv").config();
let express = require("express");
let logger = require("morgan");
const { errorHandler } = require("./middlewares/auth0");

const indexRouter = require("./routes/index");

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/", indexRouter);

app.use(errorHandler);

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

module.exports = app;
