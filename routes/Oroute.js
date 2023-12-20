const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organization_control');
const { verifyToken } = require('../auth');

// Routes for crud operation
router.post('/create',organizationController.create);
router.get('/:id', verifyToken,organizationController.getById); 
router.delete('/:id', verifyToken,organizationController.deleteById);
router.put('/:id', verifyToken,organizationController.updateById);

module.exports = router;
