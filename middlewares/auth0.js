const { expressjwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
require("dotenv").config();

const auth0Middleware = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: [process.env.AUTH0_TOKEN_SIGNING_ALG],
});

const errorHandler = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      error: "No autorizado.",
      details: err.message,
    });
  }

  return res.status(500).json({
    error: "Error interno del servidor",
    details: err.message,
  });
};

module.exports = { auth0Middleware, errorHandler };
