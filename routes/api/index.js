const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const cartRoutes = require('./cartRoutes.js');
const plantRoutes = require('./plantRoutes.js');
const plantSearchRoutes = require('./plantSearchRoutes.js');
const inventoryRoutes = require('./inventoryRoutes')

router.use('./user', userRoutes);
router.use('./cart', cartRoutes);
router.use('./plant', plantRoutes);
router.use('./search', plantSearchRoutes);
router.use('./inventory', inventoryRoutes);
router.use('./order', orderRoutes);

module.exports = router;