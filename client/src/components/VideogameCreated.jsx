// import React, {useState, useEffect} from 'react';
// import {Link, useHistory} from 'react-router-dom';
// import {postVideogame, getGenres} from '../actions/index';
// import { useDispatch, useSelector } from 'react-redux';



// function validate(input){
//     let errors = {};
//     if (!input.name){
//         errors.name = 'se requiere un nombre';
//     }else if(!input.description){
//         errors.description = 'description debe ser completado'
//     }else if(!input.released){
//         errors.released = 'released debe ser completado'
//     }else if(!input.rating){
//         errors.rating = 'rating debe ser completado'
//     }else if(!input.genre){
//         errors.genre = 'debe tener un genero'
//     }


//     return errors;
// }


// export default function VideogameCreated(){
//     const dispatch = useDispatch()
//     const history = useHistory()
//     const genres = useSelector((state) => state.genres)
//     const [errors, setErrors] = useState({});


//     const[input, setInput] = useState({
//         name: "",
//         description: "",
//         released: "",
//         rating: "",
//         genre: [],
//     })

//     function handleChange(e){
//         setInput({
//             ...input,
//             [e.target.name] : e.target.value
//         })
//         setErrors(validate({
//             ...input,
//             [e.target.name]: e.target.value
//         }));
//         console.log(input)
//     }

//     function handleSelect(e){
//         setInput({
//             ...input,
//             genres: [...input.genres, e.target.value]
//         })
//     }

//     function handleSubmit(e){
//         e.preventDefault();
//         console.log(input)
//         dispatch(postVideogame(input))
//         alert("videogame creado!")
//         setInput({
//          name: "",
//          description: "",
//          released: "",
//          rating: "",
//          genre: [],
//         })
//         history.push('/home')
//     }

//     function handleDelete(el){
//         setInput({
//             ...input,
//             genres: input.genres.filter(gen => gen !==el)
//         })
//     }

//     useEffect(() => {
//         dispatch(getGenres());
//     }, [dispatch]);

//     return(
//         <div>
//             <Link to= '/home'><button>Volver</button></Link>
//             <h1>Crear</h1>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <div>
//                     <label>Name:</label>
//                     <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)}/>
//                     {errors.name && (
//                         <p className='error'>{errors.name}</p>
//                     )}
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <input type="text" value={input.description} name="description" onChange={(e) => handleChange(e)}/>
//                     {errors.description && (
//                         <p className='error'>{errors.description}</p>
//                     )}
//                 </div>
//                 <div>
//                     <label>:</label>
//                     <input type="text" value={input.released} name="released" onChange={(e) => handleChange(e)}/>
//                     {errors.date && (
//                         <p className='error'>{errors.date}</p>
//                     )}
//                 </div>
//                 <div>
//                     <label>Rating:</label>
//                     <input type="text" value={input.rating} name="rating" onChange={(e) => handleChange(e)}/>
//                     {errors.rating && (
//                         <p className='error'>{errors.rating}</p>
//                     )}
//                 </div>
//                 <div>
//                     <label>Image:</label>
//                     <input type="text" value={input.img} name="img" onChange={(e) => handleChange(e)}/>
//                 </div>
//                 <select onChange={(e) => handleSelect(e)}>
//                     {genres.map((gen, index) =>(
//                         <option key = {index} value={gen.id}>{gen.name}</option>
//                     ))}
//                 </select>
//                 <ul><li>{input.genres.map(el => el + " , ")}</li></ul>
//                 <button type='submit'>Create Videogame</button>

//             </form>
//             {input.genres.map(el =>
//                 <div className='divGen'>
//                     <p>{el}</p>
//                     <button className='botonX' onClick={() => handleDelete(el)}>x</button>
//                 </div>
//             )}
//         </div>
//     )

// }

import React, {useState, useEffect} from 'react';
import { postVideogame } from '../actions/index';
import { useDispatch } from 'react-redux';
import {Link} from 'react'

export default function VideogameCreated(){
  const[input, setInput] = useState({
    name: "",
    description: "",
    realses: "",
    rating: "",
    genre: "",
    platforms: "",
    img: "",
})
    const dispatch = useDispatch()

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
      e.preventDefault();
      console.log(input);
      dispatch(postVideogame(input));
      alert("Videojuego creado exitosamente.");
      setInput({
        name: "",
        description: "",
        realses: "",
        rating: "",
        genre: "",
        platforms: "",
        img: "",
      });
    }
    
    return (<div>
      <Link to="/home">Ir a Home</Link>
            <form onSubmit={handleSubmit}>
              <input placeholder="Nombre de juego" type="text" name="name" onChange={handleChange} />

              <input placeholder="description" type="text" name="description" onChange={handleChange} />

              <input placeholder="platforms" type="text" name="platforms" onChange={handleChange} />

              <input placeholder="released" type="text" name="released" onChange={handleChange} />

              <input placeholder="img" type="text" name="img" onChange={handleChange} />


              <input placeholder="Rating" type="text" name="rating" onChange={handleChange} />

              <select id="genre" name="genre" onChange={handleChange}>
            <option value="All">Todos</option>
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
            <option value="Platformer">Platformer</option>
            <option value="Racing">Racing</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
        </select>

              <button type="submit">Submit</button>
            </form> 
            </div>) 
            

          };

          



