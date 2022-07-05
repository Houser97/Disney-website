import { useState } from 'react';
import '../styles/recommended.css';
import MovieCard from './movieCard';
import Daredevil from '../images/movies/DaredevilSerie.JPG';
import Malcolm from '../images/movies/MalcolmSerie.JPG';
import Luca from '../images/movies/Luca.JPG';
import ObiWan from '../images/movies/ObiSerie.JPG';
import Rio from '../images/movies/RioSerie.JPG';
import Luke from '../images/movies/LukeSerie.JPG'

const Recommended = () => {

    const [recommendedMovies] = useState([{image: Daredevil},
                                          {image: Luca},
                                          {image: Malcolm},
                                          {image: ObiWan},
                                          {image: Rio},
                                          {image: Luke}])

    return(
        <div className='container-movies'>
            <div className='title-section'>Recommended for you</div>
            <div className='images-section-movies'>
                {
                    recommendedMovies.map(function iterateMovies(movie, i){
                        return(
                            <MovieCard key={i} movie = {movie} />
                        )
                    })
                }
                
            </div>
            
        </div>
    )
}

export default Recommended;