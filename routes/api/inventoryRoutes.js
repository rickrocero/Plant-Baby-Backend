const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const tokenAuth = require('../../middleware/tokenAuth')
const { Plant, Cart, User, Inventory } = require("../../models");

router.post('/api/inventory', tokenAuth, (req, res) => {
  Inventory.create({
    name: req.body.name,
    user_id: req.user.id
  }).then(inventory => {
    res.json(inventory)
  }).catch(err => {
    res.status(500).json({ message: 'error', err})
  })
})

//not fully working
router.get("/api/inventory/:id", async (req, res) => {
  Inventory.findOne({
    where: {
      id: req.params.id
    },
    include: [Plant]
  }).then()
  });

//not fully working
router.post('/new', (req, res) => {
    Inventory.create({
        name: req.body.name,
        user_id: req.body.user_id
    })
    .then((newInventory) =>{
       res.json(newInventory)
    })
.catch((err) => {
    console.log(err)
    res.status(500).json({ message: 'error',err })
})
})

module.exports = router;