const Auth = require("../models/auth.js");
const hash = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await Auth.findOne({ email });

        if (user) {
            return res.status(500).json({ message: "This email address is registered." })
        }

        if (password.length < 6) {
            return res.status(500).json({ message: "Password is short 6+." });
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = await Auth.create({ username, email, password: passwordHash })
        const userToken = await jwt.sign({ id: newUser.id }, process.env.SECRET_TOKEN, { expiresIn: "1h" });

        res.status(201).json({
            status: "OK",
            newUser,
            userToken
        });

    } catch (error) {

    }
}