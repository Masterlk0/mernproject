const express = require("express");
const router = express.Router();

// Import User Controller
const usercontroller = require("../Controllers/usercontrol");

// Routes
router.get("/", usercontroller.getAllUsers);
router.post("/", usercontroller.addusers);
router.get("/:id", usercontroller.getById);
router.put("/:id", usercontroller.updateUser);
router.delete("/:id", usercontroller.deleteUser);



// Export Router
module.exports = router;
