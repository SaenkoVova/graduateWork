const { Router } = require('express');
const AuthController = require('../controllers/auth.controller');
const router = Router();
const { check } = require('express-validator');

router.post(
    '/signup',
    [
        check('email', 'Некоректний email').isEmail(),
        check('password', 'Мінімальна довжина пароля 6 символів')
            .isLength({ min: 6 })
    ],
    AuthController.signUp);

router.post(
    '/signin',
    [
        check('email', 'Некоректний email').isEmail(),
        check('password', 'Мінімальна довжина пароля 8 символів')
            .isLength({ min: 6 })
    ],
    AuthController.signIn);

router.post(
    '/user',
    AuthController.getUser
);

module.exports = router;
