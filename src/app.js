//src/app.js

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const cors = require("cors");

const app = express();

//CORS
app.use(cors());

//Importar rutas
const customerRoutes = require("./routes/customer");
const authRoutes = require("./routes/auth");

//Configuraciones
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "Estudio29046",
      port: "3306",
      database: "petty_mysql",
    },
    "single"
  )
);

//Formulario JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use("/customer", customerRoutes); // Rutas para clientes (prueba)
app.use("/auth", authRoutes); // Rutas para autenticación

//Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//Iniciar el servidor
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
