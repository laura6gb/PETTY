const express = require("express");
const router = express.Router();

const treatmentController = require("../controllers/treatmentController");

router.post("/addtreat", treatmentController.addTreat);
router.post("/alltreats", treatmentController.allTreats);

module.exports = router;
