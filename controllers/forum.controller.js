const Topic = require('../models/Topic');
const User = require('../models/User');
const ObjectID = require('mongoose').Types.ObjectId;
const Review = require('../models/Review');

exports.getTopics = async (req, res) => {
    try {
        const topics = await Topic.find();
        res.status(200).json({
            topics
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
}

exports.getReviews = async(req, res) => {
    try {
        const {topicId} = req.body;
        const reviews = await Review.find({topicId});
        res.status(200).json({
            reviews
        })
    } catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
}

exports.doQuestion = async (req, res) => {
    try {
        const {question} = req.body;
        const user = await User.findById({_id: ObjectID(req.user.userId)});
        const topic = new Topic({
            title: question,
            author: {
                _id: ObjectID(req.user.userId),
                firstName: user.firstName,
                secondName: user.secondName
            }
        });
        await topic.save();
        const lastInsertedTopic = await Topic.find({}).sort({_id: -1}).limit(1);
        res.status(200).json({
            lastInsertedTopic,
            message: 'Повідомлення надіслано'
        })
    }
    catch(e) {
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
}

exports.doAnswer = async (req, res) => {
    try {
        const {topicId, answer} = req.body;
        const review = new Review({
            topicId,
            answer
        });
        await review.save();
        const topic = await Topic.findOne({_id: topicId});
        await Topic.findOneAndUpdate(
            {_id: ObjectID(topicId)},
            {
                messagesQuantity: topic.messagesQuantity + 1,
                views: topic.views + 1,
                lastAnswer: Date.now()
            }
        );
        const topics = await Topic.find();
        res.status(200).json({topics})
    }
    catch(e) {
        console.log(e)
        res.status(500).json({message: 'Щось пішло не так спробуйте знову'});
    }
}