// const asyncHandler = require("express-async-handler");
// const Contact = require("../models/contact-model");

// const getContacts = asyncHandler(async (req, res) => {
//     const contacts = await Contact.find();
//     res.status(200).json(contacts);
// });

// const getContact = asyncHandler(async (req, res) => {
//     res.status(200).json({ message: `Get contact with controller for ${req.params.id} id` });
// });

// const createContact = asyncHandler(async (req, res) => {

//     console.log("The req body is:", req.body);

//     res.status(200).json({ message: "Create contact with controller." });
// });

// const updateContact = asyncHandler(async (req, res) => {
//     res.status(200).json({ message: `Update contact with controller for ${req.params.id} id` });
// });

// const deleteContact = asyncHandler(async (req, res) => {
//     res.status(200).json({ message: `Delete contact with controller for ${req.params.id} id.` });
// });

// module.exports = {
//     getContacts,
//     getContact,
//     createContact,
//     updateContact,
//     deleteContact
// };



const Contact = require("../models/contact-model");

const getContacts = async (req, res) => {

    const contacts = await Contact.find();
    res.status(200).json(contacts);
};

const getContact = async (req, res) => {
    res.status(200).json({ message: `Get contact with controller for ${req.params.id} id` });
};

const createContact = async (req, res) => {

    console.log("The req body is:", req.body);

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All inputs are empty!");
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });

    res.status(201).json(contact);
};

const updateContact = async (req, res) => {
    res.status(200).json({ message: `Update contact with controller for ${req.params.id} id` });
};

const deleteContact = async (req, res) => {
    res.status(200).json({ message: `Delete contact with controller for ${req.params.id} id.` });
};

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};