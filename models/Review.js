const {Schema, model} = require('mongoose');

const schema = new Schema({
    answer: {type: String, required: true},
    topicId: {type: String, required: true}
});

module.exports = model('Answer', schema);