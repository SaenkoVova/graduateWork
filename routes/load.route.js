const { Router } = require('express');
const router = Router();
const FondsController = require('../controllers/fonds.contoller');

router.post(
    '/fonds',
    FondsController.getFonds
);

module.exports = router;
