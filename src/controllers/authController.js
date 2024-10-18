//src/controllers/authController.js
const controller = {};

//Registro de usuario
controller.signin = (req, res) => {
  const { nombre, email, password } = req.body;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    const query =
      "INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?)";
    conn.query(query, [nombre, email, password], (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ message: "Usuario registrado exitosamente" });
    });
  });
};

//Inicio de sesión de usuario
controller.login = (req, res) => {
  const { email, password } = req.body;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    const query = "SELECT * FROM usuario WHERE email = ? AND password = ?";
    conn.query(query, [email, password], (err, usuario) => {
      if (err) return res.status(500).json(err);
      if (usuario.length === 0) {
        return res
          .status(401)
          .json({ message: "Usuario o contraseña incorrecta" });
      }
      res.json({ message: "Sesión iniciada exitosamente" });
    });
  });
};

module.exports = controller;
