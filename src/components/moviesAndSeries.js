import { useEffect, useState } from 'react';
import '../styles/moviesAndSeries.css';
import DropdownMenu from './dropdownMenu';
import MovieCard from './movieCard';

const MoviesAndSeries = ({moviesSeries, titleSection}) => {

    const [moviesOrSeries, setMoviesOrSeries] = useState(moviesSeries);
    const [filter, setFilter] = useState("ALL MOVIES A-Z");

    useEffect(() => {
        if(filter === "ANIMATED"){
            setMoviesOrSeries(moviesSeries.filter(movie => movie.isAnimated ===  true));
        } else if (filter === "KIDS"){
            setMoviesOrSeries(moviesSeries.filter(movie => movie.isForKids === true))
        } else if (filter === "ALL MOVIES A-Z") {
            setMoviesOrSeries(moviesSeries)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])


    return(
        <div className='moviesAndSeries-section'>
            <div className='title-section-placeholder'>
                <div className='title-section-container'>
                    <div className='title-section-movies-series'>{titleSection}</div>
                    <DropdownMenu setFilter={setFilter} />
                </div>
            </div>

            <div className='section-cards'>
                {moviesOrSeries.map(function iterateMovies(movie, iterator){
                    return(
                        <MovieCard key={`${iterator}-movie-serie-react`} movie={movie} />
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesAndSeries;