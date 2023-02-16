const { Router } = require('express');
const {Gender, Videogame} = require('../db');
const {getGender} = require("../controllers/controllers")
const genderRouter = Router()


genderRouter.get("/", async (rec,res)=>{
    try {
        const vg = await getGender();
        res.status(200).json(vg)
    } catch (error) {
        res.status(404).json(error.message)
    }
})


module.exports = {genderRouter}