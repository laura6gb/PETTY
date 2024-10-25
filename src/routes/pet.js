const express = require("express");
const router = express.Router();

const petController = require("../controllers/petController");

router.post("/addpet", petController.addPet);
router.get("/allpets", petController.allPets);

module.exports = router;
