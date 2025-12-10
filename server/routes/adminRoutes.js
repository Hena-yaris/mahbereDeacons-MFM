const express = require("express");

const router = express.Router();

const {getAllUsers,deleteUsers} = require("../controllers/adminController");
const adminGuard = require("../middlewares/adminGuard");

router.get("/deacons",adminGuard, getAllUsers);
router.delete("/deacons/:id",adminGuard, deleteUsers);

module.exports= router;