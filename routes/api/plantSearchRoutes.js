const axios = require("axios");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Plant, PlantTag, Tag } = require("../../models");

//working
router.post("/api/search", (req, res) => {
  const files = [req.body.base64];
  const data = {
    api_key: "7Q66uWKTVfiV3Aywgf0wy4Aq6q5ve8J0iDudbHyuDmnLbLhFVi",
    images: files,
    modifiers: ["crops_fast", "similar_images"],
    plant_language: "en",
    plant_details: [
      "common_names",
      "url",
      "name_authority",
      "wiki_description",
      "taxonomy",
      "synonyms",
    ],
  };

  axios
    .post("https://api.plant.id/v2/identify", data)
    .then((results) => {
      console.log("=================================");
      console.log("Success: ", results.data);
      console.log("=================================");
     res.json({dataRes: results.data})
    }) 
    .catch((error) => {
      console.error("Error: ", error);
      
    });
});

module.exports = router;