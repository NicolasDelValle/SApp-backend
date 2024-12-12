// controllers/userController.js

// Simulación de datos o lógica
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// Controlador para obtener todos los usuarios
exports.getAllUsers = (req, res) => {
  console.log(users);

  res.status(200).json({
    success: true,
    data: users,
  });
};

// Controlador para obtener un usuario por ID
exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};
