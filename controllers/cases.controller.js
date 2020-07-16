const Case = require('../models/Case');
const Fond = require('../models/Fond');

exports.getCases = async (req, res) => {
    let cases = [];
    const casesQuantity = await Case.countDocuments();
    const { pageSize, pageIndex, fondId } = req.body;
    const fond = await Fond.findById({_id: fondId})
    if (pageIndex === 0) {
        cases = await Case.find({fondId}).limit(pageSize);
    }
    else {
        cases = await Case.find({fondId}).skip(pageIndex * pageSize).limit(pageSize);
    }
    res.status(200).json({
        length: casesQuantity,
        array: cases,
        fondName: fond.fondName
    });
};
