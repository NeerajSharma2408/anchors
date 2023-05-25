const express = require('express')
const router = express.Router();

const { scrapping } = require('../middleware/scrapper')

router.get('/', (req,res)=>{
    res.json({message: "THIS IS THE LANDING GET ROUTE"});
})

router.post('/', async (req, res) => {

    const url = req.body.url;

    try {
        const data = await scrapping(url);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(400).json({ message: "DATA FETCHING FAILED" })
        }
    } catch (error) {
        console.log("THIS IS A BAD ERROR: "+error);
    }
})

module.exports = { router }