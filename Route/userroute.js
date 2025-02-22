const express = require("express");
const router = express.Router();

// Import User Controller
const usercontroller = require("../Controllers/usercontrol");

// Routes
router.get("/", usercontroller.getAllUsers);
router.post("/", usercontroller.addusers);

// Export Router
module.exports = router;
