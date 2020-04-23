const {Schema, model} = require('mongoose');

const schema = new Schema({
    firstName: {type: String, required: true},
    secondName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = model('User', schema);
