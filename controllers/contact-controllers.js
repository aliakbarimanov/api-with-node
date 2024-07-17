const getContacts = (req, res) => {
    res.status(200).json({ message: "Get contacts with controller." });
};

const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact with controller for ${req.params.id} id` });
};

const createContact = (req, res) => {
    res.status(200).json({ message: "Create contact with controller." });
};

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact with controller for ${req.params.id} id` });
};

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact with controller for ${req.params.id} id.` });
};

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};