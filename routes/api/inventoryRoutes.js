const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Plant, Cart, User, Inventory } = require("../../models");

//not fully working
router.get("/api/inventory", async (req, res) => {
    try {
      const allInventory = await Inventory.findAll();
      res.status(200).json(allInventory);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//not fully working
router.post('/new', (req, res) => {
    Inventory.create({
        name: req.body.name,
        user_id: req.body.user_id
    })
    .then((newInventory) =>{
        req.session.inventory = {
            name: newInventory.name,
            user_id: newInventory.user_id
        }
        res.status(200).json(newInventory)
    })
.catch((err) => {
    console.log(err)
    res.status(500).json({ message: 'error' })
})
})

module.exports = router;