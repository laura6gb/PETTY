// src/controllers/petController.js
const controller = {};

controller.addPet = (req, res) => {
  const { nombre, raza, edad, dueño, especie, tratamiento } = req.body; // Recibe los datos del formulario
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    const query =
      "INSERT INTO mascota (nombre, raza, edad, dueño, especie, tratamiento) VALUES (?, ?, ?, ?, ?, ?)";
    conn.query(
      query,
      [nombre, raza, edad, dueño, especie, tratamiento],
      (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }
        res.json({ message: "Mascota agregada exitosamente" });
      }
    );
  });
};

controller.allPets = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    const query = "SELECT * FROM mascota";
    conn.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
  });
};

module.exports = controller;
