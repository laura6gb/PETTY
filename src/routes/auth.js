// src/routes/auth.js
const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// Rutas para el inicio de sesión y el registro
router.post("/login", authController.login);
router.post("/signin", authController.signin);

module.exports = router;
