const express = require("express");
const router = express.Router();


// login and register are post operations
router.post("/register", register);
router.post("/login", login);

module.exports = router.post