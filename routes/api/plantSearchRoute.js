const axios = require("axios");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Plant, PlantTag, Tag } = require("../../models");

router.get('/search:img', (req, res) => {
    const { img } = req.params;
    const data = {
        api_key: "7Q66uWKTVfiV3Aywgf0wy4Aq6q5ve8J0iDudbHyuDmnLbLhFVi",
        images: img,
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        plant_details: ["common_names",
            "url",
            "name_authority",
            "wiki_description",
            "taxonomy",
            "synonyms"]
    };
    
    axios.post('https://api.plant.id/v2/identify', data)
    .then(res => {
        console.log('Success:', res.data);
    }).catch(error => {
        console.error('Error: ', error)
    })
    
    
})

module.exports = router