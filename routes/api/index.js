const router = require('express').Router();
const inventoryRoutes = require('./inventoryRoutes')
const plantRoutes = require('./plantRoutes')

// localhost:3001/api/inventory
router.use('/inventory', inventoryRoutes);

// localhost:3001/api/plant
router.use('/plant', plantRoutes);


module.exports = router;