import '../styles/slider.css';

const SliderCreated = ({title, image, desc}) => {

    return(
        <div className='slider' id='slider-created'>
            <div className='slider-effect-border'></div>
            <div className='poster text'>
                <h1 className='poster-title'>{title}</h1>
                <p className='poster-desc'>{desc}</p>
            </div>
            <img id='poster' src={image} alt = "poster"></img>
        </div>
    )
}

export default SliderCreated;