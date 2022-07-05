import { useState } from 'react';
import '../styles/recommended.css';
import MovieCard from './movieCard';
import Daredevil from '../images/movies/DaredevilSerie.JPG';
import Malcolm from '../images/movies/MalcolmSerie.JPG';
import Luca from '../images/movies/Luca.JPG';
import ObiWan from '../images/movies/ObiSerie.JPG';
import Rio from '../images/movies/RioSerie.JPG';
import Luke from '../images/movies/LukeSerie.JPG';
import Chip from '../images/movies/ChipSerie.JPG';
import Moon from '../images/movies/MoonSerie.JPG';
import Slider from 'react-slick';

const Recommended = () => {

    const [recommendedMovies] = useState([{image: Daredevil},
                                          {image: Luca},
                                          {image: Malcolm},
                                          {image: ObiWan},
                                          {image: Rio},
                                          {image: Luke},
                                          {image: Chip},
                                          {image: Moon}])

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
    }
            
    return(
        <div className='container-movies'>
            <div className='title-section'>Recommended for you</div>
            <div className='images-section-movies' id='images-section-movies'>
                <Slider {...settings} className = "slider-section-movies">
                {
                    recommendedMovies.map(function iterateMovies(movie, i){
                        return(
                            <MovieCard key={i} movie = {movie} />
                        )
                    })
                }
                </Slider>
            </div>
            
        </div>
    )
}

export default Recommended;