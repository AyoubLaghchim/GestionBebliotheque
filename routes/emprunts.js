const express = require('express');
const router = express.Router();
const controller = require('../controllers/empruntController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id/retour', controller.retour);
router.delete('/:id', controller.delete);

module.exports = router;
