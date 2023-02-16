import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetail} from "../actions/index"
import {useEffect} from "react";


export default function Detail(propos){
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getDetail(propos.match.params.id));
    },[dispatch])

    const myVideogame = useSelector((state) => state.detail)

    return(
        <div>
            {
                myVideogame.length > 0 ?
                <div>
                    <h1>Game: {myVideogame[0].name}</h1>
                    <img src={myVideogame[0].img? myVideogame[0].img : myVideogame[0].img} alt="" width="500px" height="700px" />
                    <h2>Details: {myVideogame[0].details}</h2>
                    <p>released: {myVideogame[0].released}</p>
                    <p>Rating: {myVideogame[0].rating}</p>
                    <h5>Genres: {!myVideogame[0].createdInDb? myVideogame[0].genres + ' ' : myVideogame[0].genders.map(el => el.name + (' '))}</h5>
                </div> : <p>Loading...</p>
            }
            <Link to='/home'>
                <button>Go back</button>
            </Link>
        </div>
    )
}