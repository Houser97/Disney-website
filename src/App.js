import './App.css';
import Header from './components/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Search from './components/search';
import Footer from './components/footer';
import { useEffect, useState } from 'react';
import Originals from './components/originals';
import MoviesAndSeries from './components/moviesAndSeries';
import movies from './moviesObject';

function App() {

  const [moviesFiltered, setMoviesFiltered] = useState(movies);
  const [seriesFiltered, setSeriesFiltered] = useState(movies);

  useEffect(()=>{
    const moviesToShow = movies.filter(movie => movie.isMovie === true);
    const seriesToShow = movies.filter(serie => serie.isMovie === false);
    setMoviesFiltered(moviesToShow);
    setSeriesFiltered(seriesToShow);  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <div className='full-height'>
          <Header />
          <Routes >
            <Route path='/' element = {<Home />}/>
            <Route path='/search' element = {<Search />}/>
            <Route path='/originals' element = {<Originals key={"originals-component"} />}/>
            <Route path='/movies' element = {<MoviesAndSeries key={"movieSectionRender"} moviesSeries={moviesFiltered} titleSection = {"Movies"} />}/>
            <Route path='/series' element = {<MoviesAndSeries key={"serieSectionRender"} moviesSeries={seriesFiltered} titleSection = {"Series"} />}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
