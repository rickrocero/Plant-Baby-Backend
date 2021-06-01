const axios = require("axios");
var fs = require('fs')
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Plant, PlantTag, Tag } = require("../../models");


//not fully working
router.post('/api/search', (req, res) => {
console.log(req.body)
// const files = req.body
    // const base64files = files.map(file => fs.readFileSync(file, 'base64'));
    // console.log(base64files)

const data = {
    api_key: "7Q66uWKTVfiV3Aywgf0wy4Aq6q5ve8J0iDudbHyuDmnLbLhFVi",
     images: base64files,
    modifiers: ["crops_fast", "similar_images"],
    plant_language: "en",
    plant_details: ["common_names",
        "url",
        "name_authority",
        "wiki_description",
        "taxonomy",
        "synonyms"]
};

axios.post('https://api.plant.id/v2/identify', data).then(res => {
    console.log('Success:');
}).catch(error => {
    console.error('Error: ', error)
})
//image from the req.body
    // const { img } = req.body;
    // const data = {
    //     api_key: "7Q66uWKTVfiV3Aywgf0wy4Aq6q5ve8J0iDudbHyuDmnLbLhFVi",
    //     images: img,
    //     modifiers: ["crops_fast", "similar_images"],
    //     plant_language: "en",
    //     plant_details: ["common_names",
    //         "url",
    //         "name_authority",
    //         "wiki_description",
    //         "taxonomy",
    //         "synonyms"]
    // };
    
    // axios.post('https://api.plant.id/v2/identify', data)
    // .then(res => {
    //     console.log('Success:', res.data);
    // }).catch(error => {
    //     console.error('Error: ', error)
    // })
    //render and populate plant cards
    
})

module.exports = router