import '../styles/movieCarousel.css';
import MovieCard from './movieCard';
import Slider from 'react-slick';

const MovieCarousel = ({movies}) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
    }
            
    return(
        <div className='container-movies'>
            <div className='title-section'>Recommended for you</div>
            <div className='images-section-movies' id='images-section-movies'>
                <Slider {...settings} className = "slider-section-movies">
                {
                    movies.map(function iterateMovies(movie, i){
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

export default MovieCarousel;