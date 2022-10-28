/*-- Assignment 2 Web Application Development COMP229 
          Dinu Gherciu, ID: 301268678, Fall 2022*/
          
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