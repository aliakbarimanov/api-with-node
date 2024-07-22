const register = (req, res) => {
    res.json({ message: "Register new user!" });
}

const login = (req, res) => {
    res.json({ message: "Login user!" });
}

const current = (req, res) => {
    res.json({ message: "Current user!" });
}

module.exports = {
    register,
    login,
    current
};