import '../styles/originals.css';
import MovieCard from './movieCard';
import movies from '../moviesObject';
import { useEffect, useRef, useState } from 'react';

const Originals = () => {

    const [originals, setOriginals] = useState(movies)

    const originalsContainer = useRef(null);
    const originalsPlaceholder = useRef(null);

    const changeTitle = () => {
        if(document.documentElement.scrollTop === 0){
            const header = document.querySelector(".header");
            header.style.backgroundColor = "rgb(26, 29, 41)" 
        } 
    }

    useEffect(()=>{
        const originalsArray = originals.filter(movie => movie.isOriginal === true);
        setOriginals(originalsArray);

        window.addEventListener("scroll", changeTitle)

        const header = document.querySelector(".header");
        header.style.backgroundColor = "rgb(26, 29, 41)" 


        return () => {
            window.removeEventListener("scroll", changeTitle);
            if(document.documentElement.scrollTop !== 0){
                header.style.backgroundColor = "rgb(14, 16, 26)";
            }
            else {header.style.backgroundColor = "transparent";}
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className='originals-section'>
            <div ref={originalsPlaceholder} className='originals-placeholder'>
                <div ref={originalsContainer} className='originals-title'>
                    ORIGINALS
                </div>
            </div>

            <div className='originals-cards-section'>
                {
                    originals.map(function iterateMovies(movie, iterator){
                        return(
                            <MovieCard key={`${iterator}-original`} movie={movie} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Originals;