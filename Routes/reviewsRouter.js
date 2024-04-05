const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const reviewShema = require('../Schemas/reviewSchema')
const verifyJWT = require('../verifyJWT')
const Review = new mongoose.model('Review', reviewShema)


router.get('/', (req, res) => {
    Review.find({}, (error, result) => {
        if (error) {
            res.status(501).send({ message: "server side Error" })
        }
        else {
            res.status(200).send(result)
        }
    })
})
router.get('/:id', (req, res) => {
    const id = req.params.id
    Review.findOne({ '_id': id }, (err, data) => {
        if (err) {
            res.status(501).send({ message: "server side Error" })
        }
        else {
            res.status(200).send(data)
        }
    })
})
router.post('/', (req, res) => {
    const newReview = new Review(req.body)
    newReview.save((err, data) => {
        if (err) {
            res.status(501).send({ message: "server side Error" })
        }
        else {
            res.status(200).send(data)
        }
    })
})
module.exports = router