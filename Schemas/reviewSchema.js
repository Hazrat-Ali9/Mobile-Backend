const {Schema} = require('mongoose')

const reviewShema = new Schema({
    email :{
        type: String,
        required: true
    },
    image:{
        type:String,
        required : true
    },
    username :{
        type: String,
        required: true
    },
    desc: {
        type:String,
        required: true
    },
    rating: {
        type:Number,
        required: true
    },
    date:{
        type: String
    }
})

module.exports = reviewShema