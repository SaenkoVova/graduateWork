const Fond = require('../models/Fond');
const Case = require('../models/Case');
const Topic = require('../models/Topic');
const User = require('../models/User');
const ObjectID = require('mongoose').Types.ObjectId;

exports.getProfileData = async (req, res) => {
    try {
        const user = await User.find({_id: ObjectID(req.user.userId)});
        const fonds = await Fond.find({
            _id: {$in: user[0].bookmarks}
        });
        const topics = await Topic.find({
            'author._id': req.user.userId
        });
        res.status(200).json({
            fonds,
            topics
        })
    } catch (e) {
        res.status(500).json({message: "Something wrong"});
    }
};


exports.addToProfile = async (req, res) => {
    try {
        const { fondId } = req.body;
        await User.findOneAndUpdate(
            {_id: ObjectID(req.user.userId)},
            { $addToSet: { bookmarks: fondId}}
        );
        res.status(200).json({message: "Додано до закладинок"});
    } catch (e) {
        res.status(500).json({message: "Something wrong"});
    }
};
