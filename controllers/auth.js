const AuthSchema = require("../models/auth.js");
const hash = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await AuthSchema.findOne({ email });

        if (user) {
            return res.status(500).json({ message: "This email address is registered." })
        }

        if (password.length < 6) {
            return res.status(500).json({ message: "Password is short 6+." });
        }

        const passwordHash = await bcrypt.hash(password, 12);  // hashed password

        const newUser = await AuthSchema.create({ username, email, password: passwordHash });
        const userToken = jwt.sign({ id: newUser.id }, process.env.SECRET_TOKEN, { expiresIn: "1h" });

        res.status(201).json({
            status: "OK",
            newUser,
            userToken
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthSchema.findOne({ email });

        if (!user) {
            return res.status(500).json({ message: "User is not find!" });
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
            return res.status(500).json({ message: "Password is false!" });
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, { expiresIn: "1h" });

        res.status(200).json({
            status: "OK",
            user,
            token,
        });

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = {register, login};