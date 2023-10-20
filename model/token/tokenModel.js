const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const session = new Schema({
    //Referencia o usuario no jwt
    token: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Session',session);