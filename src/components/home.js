import '../styles/home.css';
import Carousel from './carousel';
import ImageCategories from './imageCategories';

const Home = () => {
    return(
        <div className='home'>
            <Carousel />
            <ImageCategories />
        </div>
    )
}

export default Home;