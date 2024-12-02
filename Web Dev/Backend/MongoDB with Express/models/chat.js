const mongoose = require("mongoose");
// isme hum connection nhi bnayenge kyuki yeh hamara main "index.js" se hi kaam kregaa or humne waha pr phele hi connetion bnaa rhkha haii 

const chatSchema = new mongoose.Schema({
    from:{
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    message :{
        type: String,
        maxlength: 50 
    },
    created_at: {
        type: Date,
        required: true,
    }
})

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
