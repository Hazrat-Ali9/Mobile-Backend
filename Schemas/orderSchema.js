//OrderSchema
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    email:{
        type : String,
        required: true
    },
    phone:{
        type : Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        default : "submitted"
    },
    paymentInfo:{
        type: Object
    },
    date : {
        type : Date,
        default : Date.now,
    }
})

module.exports = orderSchema