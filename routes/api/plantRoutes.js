const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { Plant, Cart, User } = require('../../models')

//working route
router.get('/api/plant', async (req, res) => {
    try {
        const allPlants = await Plant.findAll();

        res.status(200).json(allPlants);
    } catch (err) {
        res.status(500).json(err);
    }
})

//working route
router.get('/api/plant/:id', async (req, res) => {
    try {
        const plantData = await Plant.findByPk(req.params.id, 
        //     {
        //     include: [{ model: Cart }, { model: User }],
        // }
        );

        if (!plantData) {
            res.status(404).json({ message: 'No plant found with that id!' });
            return;
        }

        res.status(200).json(plantData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.post('/plant', async (req, res) => {

//     console.log("plant post *******", req.body);
//     console.log("plant session *******", req.session);

//     try {
//         const newPlant = await Plant.create({
//             type: req.body.type,
//             price: req.body.price,
//             description: req.body.description,
//             quantity: req.body.quantity,
//             is_indoor: req.body.is_indoor,
//             for_sale: req.body.for_sale,
//             inventory_id: req.body.inventory_id
//         });
//         res.status(200).json(newPlant);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

//not fully working route
router.post("/api/plant", (req, res) => {
    Plant.create({
        type: req.body.type,
        price: req.body.price,
        description: req.body.description,
        quantity: req.body.quantity,
        is_indoor: req.body.is_indoor,
        for_sale: req.body.for_sale,
        inventory_id: req.body.inventory_id
    })
      .then((newPlant) => {
        req.session.plant = {
            type: newPlant.type,
            price: newPlant.price,
            description: newPlant.description,
            quantity: newPlant.quantity,
            is_indoor: newPlant.is_indoor,
            for_sale: newPlant.for_sale,
            inventory_id: newPlant.inventory_id
        };
  
        res.status(200).json(newPlant);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "an error occured", err });
      });
  });


router.delete('/api/plant:id', async (req, res) => {
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

//not fully working route
router.put('/api/plant/:id', async (req, res) => {
    console.log('route reached!');

    console.log('reqbody:', req.body)
    let cartID = (req.body.id);
    console.log(tripID);

    try {
        const cartToUpdate = await Cart.findByPk(cartID)

        cartToUpdate.addPlant(req.params.id)
        cartToUpdate.save();
        res.status(200).json({ message: 'success' })
    } catch (err) {
        console.log(err);
    }

})

//not fully working route
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