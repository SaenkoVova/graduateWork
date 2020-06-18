const Router = require('express');
const router = Router();
const ForumController = require('../controllers/forum.controller');
const AuthMiddleware = require('../middleware/auth.middleware');

router.get(
    '/',
    ForumController.getTopics
);

router.post(
    '/getreview',
    ForumController.getReviews
)

router.post(
    '/question',
    AuthMiddleware,
    ForumController.doQuestion
);

router.post(
    '/doanswer',
    AuthMiddleware,
    ForumController.doAnswer
)

module.exports = router;