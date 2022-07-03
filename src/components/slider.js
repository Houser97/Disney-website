import '../styles/slider.css';

const Slider = ({title, image, desc, slider, iterator}) => {

    return(
        <div ref={el => slider.current[iterator] = el} className='slider'>
            <div className='slider-effect-border'></div>
            <div className='poster text'>
                <h1 className='poster-title'>{title}</h1>
                <p className='poster-desc'>{desc}</p>
            </div>
            <img className='poster' src={image} alt = "poster"></img>
        </div>
    )
}

export default Slider;