import '../styles/search.css';
import movies from '../moviesObject';
import { useEffect, useState } from 'react';
import MovieCard from './movieCard';

const Search = () => {

    const [filteredMovies, setFilteredMovies] = useState(movies);

    const filterMovies = (e) => {
        const filter = e.target.value.toLowerCase().replace(/\s/g, '');
        let moviesToDisplay = movies.filter(movie => {
            const title = movie.title.toLowerCase().replace(/\s/g, '');
            return title.includes(filter);
        })
        setFilteredMovies(moviesToDisplay)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        /*console.log(filteredMovies)*/
    }, [])

    return(
        <div className='search-section'>
        <div className='search-container'>
            <form className='search-form' onSubmit={handleSubmit}>
                <input id='search-movie' className='input' name='search' placeholder='Search by title' onChange={filterMovies}></input>
                <div className='effect-background'></div>
            </form>
        </div>
        <div className='filtered-movies'>
            {
                filteredMovies.map(function iterateMovies(movie, iterator){
                    return(
                        <MovieCard key={iterator} movie={movie}/>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Search;