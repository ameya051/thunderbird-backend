const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

router.post("/", registerUser);
router.post("/", authUser);

module.exports = router;