const mongoose = require('mongoose')

const User = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    }

});

module.exports = mongoose.model('user',User);