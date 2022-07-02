import '../styles/carousel.css';
import Obiwan from '../images/Obi-wan-poster.webp'

const Carousel = () => {
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