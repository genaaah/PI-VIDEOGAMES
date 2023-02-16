import React, { Fragment } from "react";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {filterCharactersByStatus, getCharacters, orderByName, filterCrated, getNameCharacters, getGenres, postVideogame, getDetail} from "../actions";
import {Link} from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado'
import SearchBar from "./SearchBar";
import VideogameCreated from "./VideogameCreated"
import Detail from "./Detail";
import './home.css'

export default function Home(){
    
    const dispatch = useDispatch()
    const allCharacters = useSelector((state) => state.characters)
    const [orden, setOrden]= useState('')
    const [currentPage,setCurrentPage] = useState(0)
    const [charactersPerPage,setCharactersPerPage] = useState(15)
    const indexOfLastCharacter = currentPage + charactersPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
    const currentCharacters = allCharacters.slice(indexOfFirstCharacter,indexOfLastCharacter)

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCharacters())
    },[])

    function handleClick(e){
        e.preventDefault();
        dispatch(getCharacters());
    }

    function handleFilterStatus(e){
        dispatch(filterCharactersByStatus(e.target.value))
        setCurrentPage(1)
    }

    function handleFilterCreated(e){
        dispatch(filterCrated(e.target.value))
        setCurrentPage(1)
    }

    function handleSort (e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return(
        <div>
    <h1>VIDEO GAME</h1>
    <Link to= '/videogame' className="cp">Crear Videogame</Link>
    <button className="vc" onClick={e=> {handleClick(e)}}>
        volver a cargar
    </button>
    <div>
        <div>
        <select onChange={e => handleSort(e)}>
            <option value = 'ascen'>Ascendente</option>
            <option value = 'descen'>Descendente</option>
        </select>
        <select>
            <option value = 'masR'>Mas Valoracion</option>
            <option value = 'menosR'>Menos Valoracion</option>
        </select>
        <select onChange={e => handleFilterCreated(e)}>
            <option value = 'All'>Todos</option>
            <option value = 'Api'>Existentes</option>
            <option value = 'Created'>Creados</option>
        </select>
        <select onChange={e => handleFilterStatus(e)}>
            <option value = 'All'>Todos</option>
            <option value="Action">Action</option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Arcade">Arcade</option>
            <option value="latformer">Platformer</option>
            <option value="Racing">Racing</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
        </select>
        </div>

        <div className="pag">
        <Paginado
        charactersPerPage={charactersPerPage}
        allCharacters={allCharacters.length}
        paginado = {paginado}
        />
        </div>

        <SearchBar/>

        {currentCharacters?.map((c) =>{
                return(
                <fragment>
                 <Link to={"/home/" + c.id}>
                    <Card name={c.name} img={c.img} gender={c.gender} key={c.id}/>
                 </Link>
                </fragment>
                );
            })
        }
    </div>
        </div>
    )

}