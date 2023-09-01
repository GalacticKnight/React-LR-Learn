const mongoose = require('mongoose');
 
const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        minlength: [1, "You must have something to send"]
    },
    //this is important for cookies
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});
 
const Message = mongoose.model('Message', MessageSchema);
 
module.exports = Message;