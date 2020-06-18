const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    title: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now},
    messagesQuantity: {type: Number, required: true, default: 0},
    views: {type: Number, required: true, default: 0},
    lastAnswer: {type: Date, required: true, default: Date.now},
    author: {
        _id: {
            type: Types.ObjectId,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        secondName: {
            type: String,
            required: true
        }
    },
});

module.exports = model('Topic', schema);