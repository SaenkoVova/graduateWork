const { Schema, model } = require('mongoose');

const schema = new Schema({
    caseNumber: { type: Number, required: true },
    caseIndex: { type: Number, required: true },
    caseTitle: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true, default: Date.now },
    pageQuantity: { type: Number, required: true },
    notes: { type: String, required: true },
    fondId: { type: String, required: true}
});

module.exports = model('Case', schema);
