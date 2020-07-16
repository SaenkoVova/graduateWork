const { Router } = require('express');
const Auth = require('../middleware/auth.middleware');
const AdminController = require('../controllers/admin.controller');
const router = Router();


router.post(
    '/addFond',
    Auth,
    AdminController.addFond
);

module.exports = router;