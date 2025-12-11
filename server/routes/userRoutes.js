// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  registerDeacons,
} = require("../controllers/userController");
router.post("/register", registerDeacons);


module.exports = router;
