import '../styles/originals.css';
import MovieCard from './movieCard';
import movies from '../moviesObject';
import { useEffect, useRef, useState } from 'react';

const Originals = ({headerRefPlaceholder}) => {

    const [originals, setOriginals] = useState(movies)
    const originalsContainer = useRef(null);
    const originalsPlaceholder = useRef(null);
    const header = headerRefPlaceholder.current.childNodes[0];

    const changeTitle = () => {
        if(document.documentElement.scrollTop !== 0){
            originalsPlaceholder.current.style.height = "140px";
            originalsPlaceholder.current.style.transition = "0.250s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s";

            originalsContainer.current.style.fontSize = "30px";
            originalsContainer.current.style.height = originalsPlaceholder.current.style.height;
            originalsContainer.current.style.position = "fixed";
            originalsContainer.current.style.transition = "0.250s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s";
        } else {
            originalsPlaceholder.current.style.height = "230px";
            originalsPlaceholder.current.style.transition = "0.35s ease-in-out 0s";

            originalsContainer.current.style.height = "230px";
            originalsContainer.current.style.fontSize = "50px";
            originalsContainer.current.style.position = "relative";
            originalsContainer.current.style.transition = "0.35s ease-in-out 0s";
            
            header.style.backgroundColor = "rgb(26, 29, 41)" 
        }
    }

    useEffect(()=>{
        const originalsArray = originals.filter(movie => movie.isOriginal === true);
        setOriginals(originalsArray);

        window.addEventListener("scroll", changeTitle)

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