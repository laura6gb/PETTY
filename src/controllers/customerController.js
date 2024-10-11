// src/controllers/customerController.js
const controller = {};

// Obtener todos los clientes
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);

    conn.query("SELECT * FROM usuario", (err, usuarios) => {
      if (err) return res.status(500).json(err);
      res.json(usuarios);
    });
  });
};

// Obtener un cliente por ID
controller.get = (req, res) => {
  const { iduser } = req.params;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);

    conn.query(
      "SELECT * FROM usuario WHERE iduser = ?",
      [iduser],
      (err, usuario) => {
        if (err) return res.status(500).json(err);
        if (usuario.length === 0) {
          return res.status(404).json({ message: "Cliente no hallado" });
        }
        res.json(usuario[0]);
      }
    );
  });
};

// Crear un nuevo cliente
controller.create = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);

    const query = "INSERT INTO usuario SET ?";
    conn.query(query, [data], (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({
        message: "Cliente registrado exitosamente",
        iduser: result.insertId,
      });
    });
  });
};

// Actualizar un cliente
controller.update = (req, res) => {
  const { iduser } = req.params;
  const newData = req.body;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);

    const query = "UPDATE usuario SET ? WHERE iduser = ?";
    conn.query(query, [newData, iduser], (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Cliente actualizado exitosamente" });
    });
  });
};

// Eliminar un cliente
controller.delete = (req, res) => {
  const { iduser } = req.params;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);

    const query = "DELETE FROM usuario WHERE iduser = ?";
    conn.query(query, [iduser], (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Cliente eliminado exitosamente" });
    });
  });
};

module.exports = controller;
