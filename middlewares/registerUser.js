const axios = require("axios");
const { User } = require("../models"); // Importa desde models/index.js

const registerUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    // Solicita la información del usuario desde Auth0
    const { data: userInfo } = await axios.get(
      `https://${process.env.AUTH0_DOMAIN}/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { sub: auth0Id, picture, email } = userInfo;

    // Busca al usuario en la base de datos
    let user = await User.findOne({ where: { auth0Id } });

    if (!user) {
      // Si no existe, crea un nuevo usuario
      user = await User.create({ auth0Id, email, picture });
    } else {
      // Opcional: Actualiza la información del usuario si ya existe
      await user.update({ picture, email });
    }

    // Agrega la información del usuario a `req.user`
    req.user = user;

    next();
  } catch (err) {
    console.error("Error al registrar o actualizar el usuario:", err.message);
    res.status(500).json({ error: "Error al registrar el usuario." });
  }
};

module.exports = registerUser;
