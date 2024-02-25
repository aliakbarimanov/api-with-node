const express = require("express");

const { register, login } = require("../controllers/auth.js");

const router = express.Router();


// login and register are post operations
router.post("/register", register);
router.post("/login", login);

module.exports = router;