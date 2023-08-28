const express = require("express");
const router = express.Router();
const {allUsers, registerUser, authUser} = require("../controllers/userControllers");
const {protect} = require("../middleware/authMiddleware");

//For registering
router.route("/").post(registerUser).get(protect, allUsers);
//For Login
router.route("/login").post(authUser);

module.exports = router;