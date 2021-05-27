const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const cartRoutes = require('./cartRoutes.js');
const plantRoutes = require('./plantRoutes.js');
const plantSearchRoutes = require('./plantSearchRoute.js');

router.use('./user', userRoutes);
router.use('./cart', cartRoutes);
router.use('./plant', plantRoutes);
router.use('./search', plantSearchRoutes);

module.exports = router;