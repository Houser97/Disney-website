import '../styles/moviesSection.css';
import MovieCarousel from './movieCarousel';
import { useState } from 'react';
import Daredevil from '../images/movies/DaredevilSerie.JPG';
import Malcolm from '../images/movies/MalcolmSerie.JPG';
import Luca from '../images/movies/Luca.JPG';
import ObiWan from '../images/movies/ObiSerie.JPG';
import Rio from '../images/movies/RioSerie.JPG';
import Luke from '../images/movies/LukeSerie.JPG';
import Chip from '../images/movies/ChipSerie.JPG';
import Moon from '../images/movies/MoonSerie.JPG';

const Movies = () => {

    const [recommendedMovies] = useState([{image: Daredevil},
                                          {image: Luca},
                                          {image: Malcolm},
                                          {image: ObiWan},
                                          {image: Rio},
                                          {image: Luke},
                                          {image: Chip},
                                          {image: Moon}])


    return(
        <div className='movies-series-section'>
            <MovieCarousel movies={recommendedMovies} />
        </div>
    )
}

export default Movies;