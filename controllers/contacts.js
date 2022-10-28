// create a reference to the model
let ContactsModel = require('../models/contacts');

module.exports.contactsList = function(req, res, next) {  
    ContactsModel
    .find((err, contactsList) => {
        //console.log(contactsList);
        if(err) {
            return console.error(err);
        }
        else {
            res.render('contacts/list', {
                title: 'Business Contacts List', 
                ContactsList: contactsList,
                username: req.user ? req.user.username : ''
            });          
        }
    })
    .sort({contactName: "asc"});
    // orders the contact names in ascending order alphanumerically
};

module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    ContactsModel.findById(id, (err, contactToEdit) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            //show the edit view
            res.render('contacts/add_edit', {
                title: 'Edit Contact', 
                contact: contactToEdit,
                username: req.user ? req.user.username : ''
            });
        }
    });
};


module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id

    let updatedContact = ContactsModel({
        "_id": id,
        "contactName": req.body.contactName,
        "email": req.body.email,
        "phone": req.body.phone
    });

    ContactsModel.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            res.redirect('/contacts/list');
        }
    });
}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;

    ContactsModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contacts/list');
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {

    let newContact = ContactsModel();

    res.render('contacts/add_edit', {
        title: 'Add Contact',
        contact: newContact,
        username: req.user ? req.user.username : ''
    })          
}

module.exports.processAddPage = (req, res, next) => {

    let newContact = ContactsModel({
        _id: req.body.id,
        "contactName": req.body.contactName,
        "email": req.body.email,
        "phone": req.body.phone
    });

    ContactsModel.create(newContact, (err, contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            console.log(contact);
            res.redirect('/contacts/list');
        }
    });
    
}