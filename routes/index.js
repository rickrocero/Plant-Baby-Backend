const router = require('express').Router();
const apiRoutes = require('./api/index.js');

router.get('/', function(req, res) {
    res.send("hello!")
})
router.use('/api', apiRoutes);

module.exports = router;