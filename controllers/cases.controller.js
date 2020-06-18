const Case = require('../models/Case');

exports.getCases = async (req, res) => {
    let cases = [];
    const casesQuantity = await Case.countDocuments();
    const { pageSize, pageIndex } = req.body;
    if (pageIndex === 0) {
        cases = await Case.find().limit(pageSize);
    }
    else {
        cases = await Case.find().skip(pageIndex * pageSize).limit(pageSize);
    }
    res.status(200).json({
        length: casesQuantity,
        array: cases
    });
};
