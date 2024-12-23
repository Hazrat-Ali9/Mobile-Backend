// Order Router js
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const orderSchema = require('../Schemas/orderSchema')
const verifyJWT = require('../verifyJWT')
const Order = new mongoose.model('UsersOrder', orderSchema)

router.get('/',verifyJWT, (req, res) => {
    Order.find({}, (error, result) => {
        if (error) {
            res.status(501).send({ message: "server side Error" })
        }
        else {
            res.status(200).send(result)
        }
    })
})
router.get('/:email',verifyJWT, (req, res) => {
    const email = req.params.email
    Order.find({ email: email }, (error, result) => {
        if (error) {
            res.status(501).send({ message: "server side Error" })
        }
        else {
            res.status(200).send(result)
        }
    })
})
router.post('/add', verifyJWT, async (req, res) => {
    const newOrder = new Order(req.body)
    newOrder.save((error) => {
        if (error) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).send({ message: "Product Added Successful" })
        }
    })

})
router.put('/:id',verifyJWT, (req, res) => {
    const bodyData = req.body
    const newStatus = bodyData.position
    const paymentInfo = bodyData.payment
    Order.updateOne({'_id' : req.params.id},{
        $set: {
            position: newStatus,
            paymentInfo: paymentInfo
        }
    },(err)=> {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).send({ message: "Order Status Added Successful" })
        }
    })
})
router.put('/shipped/:id',verifyJWT, (req, res) => {
    Order.updateOne({'_id' : req.params.id},{
        $set: {
            position: "shipped"
        }
    },(err)=> {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).send({ message: "Order Status Changed Successful" })
        }
    })
})

router.delete('/:id', verifyJWT, (req, res) => {
    const id = req.params.id
    Order.deleteOne({ '_id': id }, (err) => {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).json({ message: 'Order Deleted Success' })
        }
    })
})
module.exports = router