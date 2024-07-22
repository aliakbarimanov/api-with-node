const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/user-model");

const register = async (req, res) => {

    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        res.status(400);
        throw new Error("All inputs are not submited!");
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        userName,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is invalid!");
    }
};

const login = async (req, res) => {
    res.json({ message: "Login user!" });
};

const current = async (req, res) => {
    res.json({ message: "Current user!" });
};

module.exports = {
    register,
    login,
    current
};