const initialState = {
    characters : [],
    allVideogame : [],
    detail: [],
    genres: []
}

function rootReducer(state = initialState, action){
    switch(action.type) {
        case 'GET_CHARACTERS':
            return{
                ...state,
                characters: action.payload,
                allCharacters: action.payload
            }
            case 'GET_NAME_CHARACTERS':
                return{
                    ...state,
                    characters: action.payload
                }
            case 'FILTER_BY_STATUS':
                const allCharacters = state.allCharacters
                const statusFiltered = action.payload === 'All' ? allCharacters : allCharacters.filter(el => el.status === action.payload)
            return{
                ...state,
                characters: statusFiltered
            }
            case 'POST_VIDEOGAME':
                return{
                    ...state,
                }
            case 'GET_GENRES':
                    return{
                        ...state,
                        genres: action.payload
                    }
            case 'FILTER_CREATED':
                 const statusFiltered2 = action.payload === 'Created' ? state.allVideogame.filter(el => el.algo) : state.allCharacters.filter(el => !el.algo)
                 return{
                     ...state,
                     characters : action.payload === 'All' ? state.allCharacters : statusFiltered2
                 }
            case 'ORDER_BY_NAME':
                let sortedArr = action.payload === 'asc' ?
                state.characters.sort(function (a, b){
                    if (a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                }) :
                state.characters.sort(function (a, b){
                    if (a.name > b.name){
                        return -1;
                    }
                    if (b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
                return{
                    ...state,
                    characters: sortedArr
                }
                case "GET_DETAILS":
                    return{
                        ...state,
                        detail: action.payload
                    }
            default : return state;
    }
}


export default rootReducer;