const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const profileSchema = require('../Schemas/ProfileSchema')
const Profile = new mongoose.model('Profile', profileSchema)

const verifyJWT = require('../verifyJWT')

router.get('/', verifyJWT, (req, res) => {
    Profile.find({}, (error, result) => {
        if (error) {
            res.status(501).send({ message: "server side Error" })
        }
        else {
            res.status(200).send(result)
        }
    })
})
router.get('/:email', verifyJWT, (req, res) => {
    Profile.findOne({ email: req.params.email }, (error, result) => {
        if (error) {
            res.status(501).send({ message: "server side Error" })
        }
        else {
            res.status(200).send(result)
        }
    })
})
router.put('/:email', (req, res) => {
    const email = req.params.email
    const newProfile = new Profile(req.body)
    Profile.findOne({ email: email }, (err, result) => {
        if (result) {
            Profile.updateOne({ email: email }, {
                $set: {
                    others: req.body.others
                }
            }, (err) => {
                if (err) {
                    res.status(500).send({ message: "There Is A Problem" })
                }
                else {
                    res.status(200).send({ message: "Data Updated" })
                }
            })
        }
        else {
            newProfile.save((err) => {
                if (err) {
                    res.status(501).send({ message: "server side Error" })
                }
                else {
                    res.status(200).send({ message: "data Inserted" })
                }
            })
        }
    })

})
module.exports = router
