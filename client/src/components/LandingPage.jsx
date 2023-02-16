import React from 'react';
import {Link} from 'react-router-dom';
import './landing.css'
import video from './imagenes/Controlador - 86462.mp4'


export default function LandingPage(){
    return(
        <main id="hero">
        <div class="promo">
            <h1>
                La mejor zona de videojuegos
            </h1>
            <p>
                gaming, lore, desafios, personajes y mas
            </p>
            <Link to = '/home'>
            <button className='incio-boton'>Start</button>
        </Link>
        </div>
        <video muted autoplay loop>
            <source src={video} type="video/mp4"/>
            <div class="capa"></div>
        </video>
    </main>
    )
}