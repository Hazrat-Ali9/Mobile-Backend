const mongoose = require('mongoose')

const userSchemas = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default : "am-public",
    },
    name: {
        type: String,
        required: true,
    },
    photoURL: {
        type: String,
        required: true,
    },
    date : {
        type : Date,
        default : Date.now,
    }
})

module.exports = userSchemas