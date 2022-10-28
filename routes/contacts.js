/*-- Assignment 2 Web Application Development COMP229 
          Dinu Gherciu, ID: 301268678, Fall 2022*/
          
var express = require('express');
var router = express.Router();

let contactsController = require('../controllers/contacts');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/login');
    }
    next();
}

// GET list of items 
router.get('/list', contactsController.contactsList);

// Routers for edit
router.get('/edit/:id', requireAuth, contactsController.displayEditPage);

// Route for proccessing the Edit page
router.post('/edit/:id', requireAuth, contactsController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, contactsController.performDelete);

// GET Route for displaying the Add page - CREATE Operation 
router.get('/add', requireAuth, contactsController.displayAddPage);

// POST Route for processing the Add page - CREATE Operation 
router.post('/add', requireAuth, contactsController.processAddPage);

module.exports = router;