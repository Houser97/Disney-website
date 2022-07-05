import '../styles/moviesSection.css';
import MovieCarousel from './movieCarousel';
import { useState } from 'react';
import Daredevil from '../images/movies/DaredevilSerie.JPG';
import Malcolm from '../images/movies/MalcolmSerie.JPG';
import Luca from '../images/movies/Luca.JPG';
import ObiWan from '../images/movies/ObiSerie.JPG';
import Rio from '../images/movies/RioSerie.JPG';
import Luke from '../images/movies/LukeSerie.JPG';
import Chip from '../images/movies/ChipSerie.JPG';
import Moon from '../images/movies/MoonSerie.JPG';
import Punisher from '../images/movies/PunisherSerie.JPG';
import Defenders from '../images/movies/DefendersSerie.JPG';
import Loki from '../images/movies/LokiSerie.JPG';
import IronFist from '../images/movies/IronSerie.JPG';
import Jessica from '../images/movies/JessiSerie.JPG';
import Bluey from '../images/movies/BlueySerie.JPG';
import Dino from '../images/movies/DinoSerie.JPG';
import Mira from '../images/movies/MiraSerie.JPG';
import Raya from '../images/movies/RayaSerie.JPG';
import Robots from '../images/movies/RobotsSerie.JPG';
import Toystory from '../images/movies/ToyStorySerie.JPG';
import WallE from '../images/movies/WallESerie.JPG';
import Bymax from '../images/movies/BymaxSerie.JPG';
import Increibles from '../images/movies/Increibles.JPG';
import Dalmatas from '../images/movies/Dalmatas.JPG';
import Kim from '../images/movies/Kim.JPG';
import Kusko from '../images/movies/Kusko.JPG';
import StarWarsAn from '../images/movies/StarWarsAnimated.JPG';
import Mickey from '../images/movies/Mickey.JPG';

const Movies = () => {

    const [recommendedMovies] = useState([{image: Daredevil},
                                          {image: Luca},
                                          {image: Malcolm},
                                          {image: ObiWan},
                                          {image: Rio},
                                          {image: Luke},
                                          {image: Chip},
                                          {image: Moon}])

    const titleRecommendedSection = "Recommended for you"

    const [marvelMovies] = useState([{image: Punisher},
        {image: Jessica},
        {image: IronFist},
        {image: Loki},
        {image: Moon},
        {image: Luke},
        {image: Daredevil},
        {image: Defenders}])

    const titleMarvelSection = "Marvel Series and Specials"

    const [animatedMovies] = useState([{image: Increibles},
        {image: Robots},
        {image: Rio},
        {image: Toystory},
        {image: Dino},
        {image: WallE},
        {image: Chip},
        {image: Raya}])

    const titleAnimatedMoviesSection = "Animated Movies"

    const [animatedSeries] = useState([{image: Mickey},
        {image: Bluey},
        {image: Mira},
        {image: Bymax},
        {image: StarWarsAn},
        {image: Kim},
        {image: Dalmatas},
        {image: Kusko}])

    const titleAnimatedSeriesSection = "Animated Series"


    return(
        <div className='movies-series-section'>
            <MovieCarousel movies={recommendedMovies} title = {titleRecommendedSection} />
            <MovieCarousel movies={marvelMovies} title = {titleMarvelSection} />
            <MovieCarousel movies={animatedMovies} title = {titleAnimatedMoviesSection} />
            <MovieCarousel movies={animatedSeries} title = {titleAnimatedSeriesSection} />
        </div>
    )
}

export default Movies;