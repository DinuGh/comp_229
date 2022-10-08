// Do not expose the creds
let atlasDB = "mongodb+srv://dbuser:Dinu.Gh3rciu_i993.i7@dinucluster.4dzj7fm.mongodb.net/test"

// Database setup
let mongoose = require('mongoose');

module.exports = funciton(){

    mongoose.connect(atlasDB);

    let mongoDB =mongoose.connection;

    mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDB.once()
}