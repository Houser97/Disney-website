import '../styles/carousel.css';
import Obiwan from '../images/Obi-wan-poster.webp';
import Daredevil from '../images/Daredevil.jpg';
import DrStrange from '../images/Dr-Strange.jpg';
import Moonknight from '../images/MoonKnight.webp';
import Defenders from '../images/Defenders.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SliderCreated from './slider';
import styled from "styled-components";

const Carousel = () => {

    const movies = [{title: "Obi-Wan",   image: Obiwan,      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                    {title: "Daredevil", image: Daredevil,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                    {title: "Dr. Strange 2", image: DrStrange,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                    {title: "Moon Knight", image: Moonknight,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."},
                    {title: "Defenders", image: Defenders,   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus libero ligula, ac ultrices eros sollicitudin pharetra. Mauris vitae convallis massa. Suspendisse potenti."}];

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
   
    return(
        <div className='carousel-section'>
            <CarouselSlick {...settings} className = "carousel">
                {movies.map(
                    function iterateMovies(item, iterator){
                        return(
                            <SliderCreated key={iterator} image={item.image} title={item.title} desc = {item.desc}/>
                        )
                    }
                )}
            </CarouselSlick>
        </div>
    )
}

export default Carousel;

const CarouselSlick = styled(Slider)`

    ul li button:before {
            color:white;
            font-size: 10px
    }

    li.slick-active button::before{
        color:white;
    }

    .slick-list{
        overflow: visible;
    }

    button {
        z-index: 2;
    }

`
