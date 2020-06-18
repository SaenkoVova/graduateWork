const { Schema, model} = require('mongoose');

const schema = new Schema({
    fondNumber: { type: Number, required: true },
    fondName: { type: String, required: true },
    startDate: { type: Date, required: true, default: Date.now() },
    endDate: { type: Date, required: true, default: null },
    caseQuantity: { type: Number, required: true, default: 0 },
    loginRequired: { type: Boolean, required: true, default: false }
});

module.exports = model('Fond', schema);
