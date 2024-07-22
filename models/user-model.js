const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "Please add user name!"]
        },
        email: {
            type: String,
            required: [true, "Please add email address!"],
            unique: [true, "Email address already taken."]
        },
        password: {
            type: String,
            required: [true, "Please add password"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);