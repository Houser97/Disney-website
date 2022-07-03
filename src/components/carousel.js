import '../styles/carousel.css';
import Obiwan from '../images/Obi-wan-poster.webp';
import Daredevil from '../images/Daredevil.jpg';
import DrStrange from '../images/Dr-Strange.webp';
import Moonknight from '../images/Moon-knight.jpg';
import Defenders from '../images/Defenders.webp';
import { useState } from 'react';

const Carousel = () => {

    const [movies] = useState([{title: "Obi-Wan",   image: Obiwan,      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                               {title: "Daredevil", image: Daredevil,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                               {title: "Dr. Strange 2", image: DrStrange,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                               {title: "Moon Knight", image: Moonknight,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                               {title: "Defenders", image: Defenders,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."}])

    return(
        <div className='carousel-section'>
            <div className='carousel'>
                <div className='slider'>
                    <div className='slider-effect-border'></div>
                    <div className='poster text'>
                        <h1 className='poster-title'>Obi-Wan</h1>
                        <p className='poster-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti.</p>
                    </div>
                    <img className='poster' src={Obiwan} alt = "poster"></img>
                </div>
            </div>
        </div>
    )
}

export default Carousel;