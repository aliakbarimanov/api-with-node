const express = require("express");
const router = express.Router();

const validateToken = require("../middleware/validate-token-handler");

const {
    register,
    login,
    current
} = require("../controllers/user-controllers");

router.post("/register", register);
router.post("/login", login);
router.get("/current", validateToken, current);

module.exports = router;