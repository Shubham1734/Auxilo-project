const express = require('express');
const router = express.Router();
const personalDetailsController = require('../controllers/personal_control');
const { verifyToken } = require('../auth');

router.post('/create', personalDetailsController.create);
router.get('/:id',verifyToken, personalDetailsController.getById);
router.delete('/:id',verifyToken, personalDetailsController.deleteById);
router.put('/:id', verifyToken,personalDetailsController.updateById);

module.exports = router;
