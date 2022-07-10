import '../styles/originals.css';
import MovieCard from './movieCard';
import movies from '../moviesObject';
import { useEffect, useRef, useState } from 'react';

const Originals = () => {

    const [originals, setOriginals] = useState(movies)

    const originalsContainer = useRef(null);
    const originalsPlaceholder = useRef(null);

    const changeTitle = () => {
        if(document.documentElement.scrollTop !== 0){
            originalsPlaceholder.current.style.height = "150px";
            originalsPlaceholder.current.style.transition = "0.250s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s";

            originalsContainer.current.style.fontSize = "30px";
            originalsContainer.current.style.position = "fixed";
            originalsContainer.current.style.transition = "0.250s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s";
        } else {
            originalsPlaceholder.current.style.height = "230px";
            originalsPlaceholder.current.style.transition = "0.35s ease-in-out 0s";

            originalsContainer.current.style.fontSize = "50px";
            originalsContainer.current.style.position = "relative";
            originalsContainer.current.style.transition = "0.35s ease-in-out 0s";
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
            header.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.03) 15%, rgba(0, 0, 0, 0.125) 30%, rgba(0, 0, 0, 0.25) 46%, rgba(0, 0, 0, 0.4) 61%, rgba(0, 0, 0, 0.553) 75%, rgba(0, 0, 0, 0.694) 88%, rgba(0, 0, 0, 0.8));";
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