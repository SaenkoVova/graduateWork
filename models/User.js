const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    firstName: {type: String, required: true},
    secondName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    connectionDate: {type: Date, required: true, default: Date.now},
    bookmarks: [{type: Types.ObjectId, required: true, default: null}]
});

module.exports = model('User', schema);
