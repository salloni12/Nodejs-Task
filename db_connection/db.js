module.exports = () => {
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/user');

    mongoose.connection.on('connected', () => {
        console.log("connected to database mongodb @27017");
    });

    mongoose.connection.on('error', () => {
        if (err) {
            console.log("eroor in db connection:" + err);
        }
    });

}