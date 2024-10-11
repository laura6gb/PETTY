const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM usuario", (err, usuarios) => {
      if (err) {
        res.json(err);
      }
      res.render("");
    });
  });
};

module.exports = controller;
