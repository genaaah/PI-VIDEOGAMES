const axios = require('axios')
const {API_KEY} = process.env;
const {Videogame, Gender} = require('../db');


const getApiInfo = async()=>{
    const apiUrl = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`)
    const apiUrl1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=40`)
    const apiUrl2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)
    const bddVG = await Videogame.findAll()
    const bdInfo = await bddVG.map(vj => {
        return{
            id: vj.id,
            name: vj.name,
            released: vj.released,
            img: vj.img,
            rating: vj.rating,
            platforms: vj.platforms.map(plat => plat = plat.platform.name),
            description: vj.description
        }
    })


    const apiInfo = await apiUrl.data.results.map(vj => {
        return{
            id: vj.id,
            name: vj.name,
            released: vj.released,
            img: vj.background_image,
            rating: vj.rating,
            platforms: vj.platforms.map(plat => plat = plat.platform.name),
            genres: vj.genres.map(gen => gen = gen.name),
            description: "There's no description"
        }
    })
    const apiInfo1 = await apiUrl1.data.results.map(vj1 => {
        return{
        id: vj1.id,
        name: vj1.name,
        released: vj1.released,
        img: vj1.background_image,
        rating: vj1.rating,
        platforms: vj1.platforms.map(plat => plat = plat.platform.name),
        genres: vj1.genres.map(gen => gen = gen.name),
        description: "There's no description"
        }
    } )
    
    const apiInfo2 = await apiUrl2.data.results.map(vj2 => {
        return{
        id: vj2.id,
        name: vj2.name,
        released: vj2.released,
        img: vj2.background_image,
        rating: vj2.rating,
        platforms: vj2.platforms.map(plat => plat = plat.platform.name),
        genres: vj2.genres.map(gen => gen = gen.name),
        description: "There's no description"
        }
    } )
    return [...apiInfo, ...apiInfo1, ...apiInfo2, ...bdInfo];
}

const getGender = async ()=>{
    const allGender = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    allGender.data.results.map(g => Gender.create({id: g.id, name: g.name}))
    return allGender.data.results;
}

const getQueryvideogame = async (name)=>{
    const vg = await getApiInfo()
    return vg.filter(juego=>juego.name.toLowerCase().includes(name.toLowerCase()))
}

const videoGameId = async(id) =>{
    const allApiId = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    const allGame =  allApiId.data 
        
       const apiData = {
            id: allGame.id,
            name: allGame.name,
            released: allGame.released,
            img: allGame.background_image,
            rating: allGame.rating,
            platforms: allGame.platforms.map(plat => plat = plat.platform.name),
            description: allGame.description
        }

         const bddVG = await Videogame.findAll()
         const bdInfo = await bddVG.map(vj => {
        return{
            id: vj.id,
            name: vj.name,
            released: vj.released,
            img: vj.img,
            rating: vj.rating,
            platforms: vj.platforms.map(plat => plat = plat.platform.name),
            description: vj.description
        }
    }) 
        return [apiData, ...bdInfo].find(b => b.id == id)  
}

const postVideogame = async (postApiInfo) => {
    const {name, description, platforms, released, rating, img, genres} = postApiInfo
    if(![name,description,platforms]) return Error('Mandatory data missing')
    try {
        const newVideogame = await Videogame.create({
            name,description,platforms,released,rating,img
        })
        newVideogame.addGenders(genres) 
        return newVideogame
    } catch (err) {
        throw Error(err)
    }
}



module.exports = {getApiInfo, getGender,getQueryvideogame, videoGameId,postVideogame}