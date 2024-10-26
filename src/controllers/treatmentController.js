// src/controllers/treatmentController.js
const controller = {};

controller.addTreat = (req, res) => {
  const { nombre, detalles, precio, mascota, fecha } = req.body; // Recibe los datos del formulario
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    const query =
      "INSERT INTO tratamiento (nombre, detalles, precio, mascota, fecha) VALUES (?, ?, ?, ?, ?)";
    conn.query(
      query,
      [nombre, detalles, precio, mascota, fecha],
      (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }
        res.json({ message: "Tratamiento agregado exitosamente" });
      }
    );
  });
};

controller.allTreats = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    const query = "SELECT * FROM tratamiento";
    conn.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
  });
};

module.exports = controller;
