import React from "react";
import './card.css'

export default function CharCard({name, img, genres}){
    return(
        <div className="cards">
            <h3>{name}</h3>
            <h5>{genres}</h5>
            <img src={img} alt="img not found" width="400px" height="450px"/>
        </div>
    )
}