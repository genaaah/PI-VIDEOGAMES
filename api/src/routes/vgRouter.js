const { Router } = require('express');
const {Gender, Videogame} = require('../db');
const {getApiInfo, getGender,getQueryvideogame, videoGameId,postVideogame} = require('../controllers/controllers')

const vgRouter = Router()

vgRouter.get("/", async (rec,res)=>{
    try {
        const vg = rec.query.name ? await getQueryvideogame(rec.query.name) : await getApiInfo();
        res.status(200).json(vg)
    } catch (error) {
        res.status(404).json(error.message)
    }
})

vgRouter.get("/:id", async (rec,res)=>{
    try {
        const vg = await videoGameId(rec.params.id);
        res.status(200).json(vg)
    } catch (error) {
        res.status(404).json(error.message)
    }
})

vgRouter.post("/", async (req,res)=>{
    try {
        const vg = await postVideogame(req.body);
        res.status(200).json(req.body)
    } catch (error) {
        res.status(404).json(error.message)
    }
})

module.exports = {vgRouter}