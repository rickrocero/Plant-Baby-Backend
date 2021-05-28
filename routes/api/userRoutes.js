const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Plant, Cart, User } = require("../../models");

//working route
router.get("/api/user", async (req, res) => {
  try {
    const allUsers = await User.findAll();

    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

//working route
router.post('/api/login', (req, res) => {
    try{
        User.findOne({
          where: {
            email: req.body.email,
          },
        }).then((foundUser) => {
          if (!foundUser) {
            req.session.destroy();
            return res.status(401).send("Login Failed");
          }
          if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.user = {
              email: foundUser.email,
              id: foundUser.dataValues.id,
            };
            return res.json(foundUser);
          } else {
            return res.status(400).send("Login Failed");
          }
        });
      }
      catch (err) {
          
      }
})

//working route
router.get("/api/user/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, 
    //   {
    //   include: [{ model: Cart }, { model: Plant }],
    // }
    );

    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//working route
router.post("/api/signup", (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((newUser) => {
      req.session.user = {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
        id: newUser.id,
      };

      res.status(200).json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "an error occured", err });
    });
});

//working route
router.get("/api/logout", (req, res) => {
    req.session.destroy();
    res.status(200).json({ message: "logged out" });
  });

module.exports = router;
