const express = require("express");
const router = express.Router();

const {
    register,
    login,
    current
} = require("../controllers/user-controllers");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/current").post(current);

module.exports = router;