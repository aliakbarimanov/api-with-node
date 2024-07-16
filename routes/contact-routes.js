const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({ message: "Get all contacts!" });
});

router.route("/:id").get((req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id} id.` });
});

router.route("/").post((req, res) => {
    res.status(200).json({ message: "Post contact successfully!" });
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id} id.` });
});

router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Edit contact for ${req.params.id} id.` });
});

module.exports = router;