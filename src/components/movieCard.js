import '../styles/movieCard.css';

const MovieCard = ({movie}) => {
    const image = movie.image;
    return(
        <div className='movie-card' id='movie-card'>
            <img src= {image} alt = "Daredevil" className='image-movie-card'></img>
        </div>
    )
}

export default MovieCard;