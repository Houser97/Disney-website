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
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 120 120">
                            <g fill="none" fill-rule="evenodd" opacity=".2">
                                <circle cx="60" cy="60" r="57.5" stroke="#FFF" stroke-width="5"/>
                                <path fill="#F9F9F9" d="M63.626 57.254h17.739a3.5 3.5 0 0 1 3.5 3.5v.434a3.5 3.5 0 0 1-3.5 3.5h-17.74v17.739a3.5 3.5 0 0 1-3.5 3.5h-.433a3.5 3.5 0 0 1-3.5-3.5v-17.74H38.453a3.5 3.5 0 0 1-3.5-3.5v-.433a3.5 3.5 0 0 1 3.5-3.5h17.74V39.515a3.5 3.5 0 0 1 3.5-3.5h.433a3.5 3.5 0 0 1 3.5 3.5v17.739z"/>
                            </g>
                        </svg>
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