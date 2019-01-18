const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
    //Get connection string from environment variable defined in config
    const db = config.get('db');

    mongoose
        .connect(db)
        .then(() => console.log("Connected to MongoDB..."))
        .catch(err => console.log("Couldn't connect to MongoDB...", err)); 
}