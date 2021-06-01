const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const tokenAuth = require('../../middleware/tokenAuth')
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
        User.findOne({
          where: {
            email: req.body.email,
          },
        }).then(user => {
          if (!user) {
            return res.status(401).json({ message: "Login Failed" });
          }
          else if (!bcrypt.compareSync(req.body.password, user.password)) {
            console.log(req.body.password);
            console.log("passwords dont match")
            return res.status(403).json({ message: "auth failed" })
          } else {
            const token = jwt.sign({
              first_name:user.first_name,
              last_name:user.last_name,
              email:user.email,
              id:user.id
            },
            process.env.JWT_SECRET,
            {
              expiresIn:'2h'
            })
            res.json({token, user})
          }
        });
})

// tokenAuth
router.get("/api/profile",tokenAuth,(req,res)=>{
  User.findOne({
      where:{
          id:req.user.id
      },
      // include: [{ model: Cart }, { model: Plant }],
  }).then(userData=>{
    console.log(res)
      return res.json(userData)
  }).catch(err=>{
      console.log(err);
      return res.status(500).json({message:"error",err})
  })
})

//working route
router.post("/api/signup", (req, res) => {
  console.log(req.body)
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((newUser) => {
      const token = jwt.sign({
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
        id: newUser.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn:'2h'
      });
      res.json({token, user:newUser});
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
