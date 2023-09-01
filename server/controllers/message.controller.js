const Message = require('../models/message.model');
const jwt = require('jsonwebtoken');
const SECRET = "NOTSOSECRET"
const User = require('../models/user.model');

module.exports.findAllMessages = (req, res) => {
    Message.find()
        .then((allDaMessages) => {
            res.json(allDaMessages )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSingleMessage = (req, res) => {
    Message.findOne({ _id: req.params.id })
        .then(oneSingleMessage => {
            res.json(oneSingleMessage)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewMessage = (req, res) => {
    const user = jwt.verify(req.cookies.userToken, SECRET);
    Message.create({ ...req.body, creator: user })
    
        .then(newlyCreatedMessage => {
            res.json(newlyCreatedMessage)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingMessage = (req, res) => {
    Message.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedMessage => {
            res.json(updatedMessage)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingMessage = (req, res) => {
    Message.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}