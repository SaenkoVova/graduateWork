const { Router } = require('express');
const router = Router();
const auth = require('../middleware/auth.middleware');
const ProfileController = require('../controllers/profile.controller');

router.get(
    '/',
    auth,
    ProfileController.getProfileData

);

router.post(
    '/addFond',
    auth,
    ProfileController.addToProfile
);

module.exports = router;
