const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact-model");

const getContacts = asyncHandler(async (req, res) => {

    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const getContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact is not find!");
    }

    res.status(200).json(contact);
});

const createContact = asyncHandler(async (req, res) => {

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
});

const updateContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact is not find!");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact is not find!");
    }
    await Contact.deleteOne();
    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};