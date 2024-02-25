const mongoose = require("mongoose");

// Database object keys: username, email, password, date.

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: new Date(),
    }
});

module.exports = mongoose.model("auth", AuthSchema);