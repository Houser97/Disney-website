import '../styles/carousel.css';
import Obiwan from '../images/Obi-wan-poster.webp';
import Daredevil from '../images/Daredevil.jpg';
import DrStrange from '../images/Dr-Strange.webp';
import Moonknight from '../images/Moon-knight.jpg';
import Defenders from '../images/Defenders.webp';
import Slider from './slider';
import { useEffect, useRef, useState } from 'react';

const Carousel = () => {

    const movies = [{title: "Obi-Wan",   image: Obiwan,      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                    {title: "Daredevil", image: Daredevil,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                    {title: "Dr. Strange 2", image: DrStrange,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                    {title: "Moon Knight", image: Moonknight,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                    {title: "Defenders", image: Defenders,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."}];

    const [sliders, setSliders] = useState([]);

    const slider = useRef([]);
    const carousel = useRef(null);

    let i = 0;
    let multiplier = 1;
    
    

    useEffect(() => {
        setSliders(slider.current.slice(0, movies.length))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            slider.current[0].style.marginLeft = `calc(-100% - 30px)`

            multiplier ++;

            if(i > 1){
                slider.current[1].style.marginLeft = `calc(-100% - 30px)`
            }


    
            if(i%2) {
                carousel.current.appendChild(slider.current[0])
                slider.current.addEventListener("transitionend", ()=>{
                    slider.current[1].style.marginLeft = `0px`
                }, {once: true})
            }
            
            i++;
            console.log(slider.current);
        },2000)

        return () => {
            clearInterval(intervalId);
        }
    }, [sliders])

    return(
        <div className='carousel-section'>
            <div className='carousel' ref={carousel}>
                {movies.map(
                    function iterateMovies(item, iterator){
                        return(
                            <Slider key={iterator} image={item.image} title={item.title} desc = {item.desc}
                            slider = {slider} iterator = {iterator}/>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default Carousel;