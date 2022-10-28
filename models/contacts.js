
let mongoose = require('mongoose');

// Create a model class
let contactsModel = mongoose.Schema(
    {
        contactName: String,
        email: String,
        phone: String
    },
    {
        collection: "contacts"
    }
);

module.exports = mongoose.model('Contacts', contactsModel);