const router = require('express').Router();
const apiRoutes = require('./api/index.js');
userRoutes = require("../routes/api/userRoutes")
plantRoutes = require("../routes/api/plantRoutes")
plantSearchRoutes = require('../routes/api/plantSearchRoutes')
cartRoutes = require('../routes/api/cartRoutes')


router.get('/', function(req, res) {
    res.send("hello!")
})
// router.use('/api', apiRoutes);
router.use(userRoutes);
router.use(plantRoutes);
router.use(plantSearchRoutes);
router.use(cartRoutes);

module.exports = router;