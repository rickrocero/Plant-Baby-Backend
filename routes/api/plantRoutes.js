<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { Plant, Cart, User } = require('../../models')


router.get('/', async (req, res) => {
    try {
        const allPlants = await Plant.findAll();

        res.status(200).json(allPlants);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const plantData = await Plant.findByPk(req.params.id, {
            include: [{ model: Cart }, { model: User }],
        });

        if (!plantData) {
            res.status(404).json({ message: 'No plant found with that id!' });
            return;
        }

        res.status(200).json(plantData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {

    console.log("plant post *******", req.body);
    console.log("plant session *******", req.session);

    try {
        const newPlant = await Plant.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            user_id: req.session.user.id
        });
        res.status(200).json(newPlant);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    console.log(req.body)
    try {
        const removedItem = await Plant.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(removedItem)

        if (!removedItem) {
            res.status(404).json({ message: 'plant not found' })

        }
    } catch (err) {
        res.status(500).json(err);
    }
})


router.put('/:id', async (req, res) => {
    console.log('route reached!');

    console.log('reqbody:', req.body)
    let cartID = (req.body.id);
    console.log(tripID);

    try {
        const cartToUpdate = await Trip.findByPk(cartID)

        cartToUpdate.addPlant(req.params.id)
        cartToUpdate.save();
        res.status(200).json({ message: 'success' })
    } catch (err) {
        console.log(err);
    }

})

router.put('/update/:id', async (req, res) => {
    console.log('route reached :)');

    console.log('reqbody:', req.body)
    let plantID = Number(req.params.id);
    console.log(itemID);
    // const item = await Plant.findByPk(itemID);
    // console.log(item);


    try {
        const plantToUpdate = await Plant.update(
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
            },
            {
                where: {
                    id: iplantID
                }
            })
        console.log(`My plant that I updated:`, plantToUpdate);

        res.status(200).json(plantToUpdate);
    } catch (err) {
        res.status(500).json(err);
    }

})



module.exports = router;
=======
// localhost:3001/api/plant
const router = require("express").Router();
const tokenAuth = require("../../middleware/tokenAuth");
const { Inventory, Plant, User } = require("../../models");

//WORKING
// find all plants
// localhost:3001/api/plant/allplants
router.get("/allplants", async (req, res) => {
  try {
    const allPlants = await Plant.findAll();
    res.status(200).json(allPlants);
  } catch (err) {
    res.status(500).json(err);
  }
});

//WORKING
// CREATE a plant
// localhost:3001/api/plant
router.post("/", tokenAuth, async (req, res) => {
  try {
    const newPlant = await Plant.create(req.body);
    res.status(200).json(newPlant);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//WORKING
// GET plant by Id
// localhost:3001/api/plant/:id
router.get("/:id", tokenAuth, async (req, res) => {
  try {
    const plantData = await Plant.findOne({
      where: { id: req.params.id },
      include: Inventory,
    });
    if (!plantData) {
      res.status(404).json({ message: "No plant found with that id!" });
      return;
    }
    res.status(200).json(plantData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// WORKING
// UPDATE a plant by id
// localhost:3001/api/plant/:id
router.put("/:id", tokenAuth, async (req, res) => {
  try {
    const updatedPlantData = await Plant.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedPlantData) {
      res.status(400).json({ message: "No such plant" });
      return;
    }
    res.status(200).json(updatedPlantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// WORKING
// DELETE a plant by id
// localhost:3001/api/plant/:id
router.delete("/:id", tokenAuth, async (req, res) => {
  try {
    const plantData = await Plant.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!plantData) {
      res.status(404).json({ message: "No plant found with that id!" });
      return;
    }
    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
>>>>>>> develop
