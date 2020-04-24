const Fond = require('../models/Fond');
const Case = require('../models/Case');
const ObjectID = require('mongoose').Types.ObjectId;

exports.getProfileData = async (req, res) => {
    try {
        const fonds = await Fond.find({owners: req.user.userId});
        const cases = await  Case.find({owners: req.user.userId});
        res.json({fonds, cases});
    } catch (e) {
        res.status(500).json({message: "Something wrong"});
    }
};


exports.addToProfile = async (req, res) => {
    try {
        const { fondId } = req.body;
        Fond.findOneAndUpdate(
            {_id: ObjectID(fondId)},
            { $push: { owners: req.user.userId}}
        );
        res.status(200);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Something wrong"});
    }
};
