const Fond = require('../models/Fond');

exports.getFonds = async (req, res) => {
    let fonds = [];
    const fondsQuantity = await Fond.countDocuments();
    const { pageSize, pageIndex } = req.body;
    console.log(pageSize, pageIndex)
    if (pageIndex === 0) {
        fonds = await Fond.find().limit(pageSize);
    }
    else {
        fonds = await Fond.find().skip(pageIndex * pageSize).limit(pageSize);
    }
    res.status(200).json({
        length: fondsQuantity,
        array: fonds
    });
};
