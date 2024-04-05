const { Schema } = require("mongoose");

const profileSchema = new Schema({
    name:{
        type : String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    others: {
        type: Object,
        required : true
    }

    
})

module.exports = profileSchema
