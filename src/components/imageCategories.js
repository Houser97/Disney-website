import '../styles/imageCategories.css';
import Disney from '../images/Disney.png';
import Pixar from '../images/Pixar.png';
import Marvel from '../images/Marvel.png';
import StarWars from '../images/Star.png';
import National from '../images/National.png';
import videoDisney from '../Videos/disney.mp4';
import videoPixar from '../Videos/pixar.mp4';
import videoNational from '../Videos/geographic.mp4';
import videoMarvel from '../Videos/marvel.mp4';
import videoStar from '../Videos/star-war.mp4';
import { useEffect, useRef, useState } from 'react';
import ImageVideo from './imageVideo';

const ImageCategories = () => {

    const [imagesVideos] = useState([{image: Disney, video: videoDisney},
                                     {image: Pixar, video: videoPixar},
                                     {image: Marvel, video: videoMarvel},
                                     {image: StarWars, video: videoStar},
                                     {image: National, video: videoNational}])

    const videoElement = useRef([]);

    useEffect(() => {
        videoElement.current.forEach(video => {
            video.addEventListener("mouseover", () => {
                video.play();
            })

            video.addEventListener("mouseleave", () => {
                video.pause();
            })
        })
        
    }, [])

    return(
        <div className='images-category-container'>
            {
                imagesVideos.map(function iterateImageVideos(item, iterator){
                    return(
                        <ImageVideo key={iterator} imageAndVideo = {item} videoElement = {videoElement} iterator = {iterator} />
                    )
                })
            }
        </div>
    )
}

export default ImageCategories;