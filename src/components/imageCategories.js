import '../styles/imageCategories.css';
import Disney from '../images/Disney.png';
import Pixar from '../images/Pixar.png';
import Marvel from '../images/Marvel.png';
import StarWars from '../images/Star.png';
import National from '../images/National.png';

const ImageCategories = () => {
    return(
        <div className='images-category-container'>
            <div className='image-category'>
                <img src={Disney} alt = "Disney" className='image-png disney'></img>
            </div>
            <div className='image-category'>
                <img src={Pixar} alt = "Pixar" className='image-png pixar'></img>
            </div>
            <div className='image-category'>
                <img src={Marvel} alt = "Marvel" className='image-png'></img>
            </div>
            <div className='image-category'>
                <img src={StarWars} alt = "StarWars" className='image-png'></img>
            </div>
            <div className='image-category'>
                <img src={National} alt = "National" className='image-png national'></img>
            </div>
        </div>
    )
}

export default ImageCategories;