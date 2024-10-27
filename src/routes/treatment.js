const express = require("express");
const router = express.Router();

const treatmentController = require("../controllers/treatmentController");

router.post("/addtreat", treatmentController.addTreat);
router.get("/alltreats", treatmentController.allTreats);

module.exports = router;
