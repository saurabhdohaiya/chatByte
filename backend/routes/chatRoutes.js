const express = require("express");
const { accessChat, fetchChats, createGroupChat, renameGroup, removeFromGroup, addToGroup} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//accesing the chat or creating the chat of user if user logged in
router.route("/").post(protect, accessChat);
//accesing all the chats for that particular user
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;