// src/routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rutas para el login y el registro
router.post("/login", authController.login);
router.post("/signup", authController.signup);

module.exports = router;
