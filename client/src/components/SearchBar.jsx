import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getNameCharacters } from '../actions';
import './serch.css'

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")


    function handleInmputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameCharacters(name))
    }

    return(
        <div>
            <input 
            type="text" 
            placeholder="buscar..."
            onChange={(e) => handleInmputChange(e)}
            />
            <button type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
        </div>
    )
}