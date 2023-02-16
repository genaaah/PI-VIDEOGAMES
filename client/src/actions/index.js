import axios from 'axios';

export function getCharacters(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/videogames");
        return dispatch({
            type: 'GET_CHARACTERS',
            payload: json.data
        })
    }
}

// export function filterCharactersByStatus(payload){
//     return{
//         type: 'FILTER_BY_STATUS',
//         payload
//     }
// }
export function filterCharactersByStatus(genres){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/genres=" + genres);
            return dispatch({
                type: "FILTER_BY_STATUS",
                payload: json.data
            })
        } catch (error){
            console.log(error)
        }
    }
}

export function filterCrated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function getNameCharacters(name){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/videogames?name=" + name);
            return dispatch({
                type: "GET_NAME_CHARACTERS",
                payload: json.data
            })
        } catch (error){
            console.log(error)
        }
    }
}


export function getGenres(){
    return async function(dispatch){
        var info = await axios.get("http://localhost:3001/genres",{

        });
        return dispatch({type: "GET_GENEROS", payload: info.data});
    };
}

export function postVideogame(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/videogames", payload)
        return response;
    }
}

export function getDetail(id){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/videogames/" + id);
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}