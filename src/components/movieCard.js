import '../styles/movieCard.css';
import { userContext } from '../App';
import { useContext } from 'react';

const MovieCard = ({movie}) => {
    
    let userID = useContext(userContext);

    const image = movie.image;
    return(
        <div className='movie-card' id='movie-card'>
            <div className='effect-border'></div>
            <img src= {image} alt = "Daredevil" className='image-movie-card'></img>
            {
                userID !== null ? (
                    <div className='add-icon-movieCard'>
                        icon
                    </div>
                ) : (
                    <div className='add-icon-userID-null'>
                        nothing
                    </div>
                )
            }
        </div>
    )
}

export default MovieCard;