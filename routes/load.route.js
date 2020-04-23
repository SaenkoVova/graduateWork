const { Router } = require('express');
const router = Router();
const FondsController = require('../controllers/fonds.contoller');
const CasesController = require('../controllers/cases.controller');

router.post(
    '/fonds',
    FondsController.getFonds
);

router.post(
    '/cases',
    CasesController.getCases
);

module.exports = router;
