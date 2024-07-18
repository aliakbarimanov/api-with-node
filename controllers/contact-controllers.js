// const asyncHandler = require("express-async-handler");

// const getContacts = asyncHandler(async (req, res) => {
//     res.status(200).json({ message: "Get contacts with controller." });
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


// const asyncHandler = require("express-async-handler");

const getContacts = async (req, res) => {
    res.status(200).json({ message: "Get contacts with controller." });
};

const getContact = async (req, res) => {
    res.status(200).json({ message: `Get contact with controller for ${req.params.id} id` });
};

const createContact = async (req, res) => {

    console.log("The req body is:", req.body);

    res.status(200).json({ message: "Create contact with controller." });
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