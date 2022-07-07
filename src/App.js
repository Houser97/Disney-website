import './App.css';
import Header from './components/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Search from './components/search';
import Footer from './components/footer';
import { useEffect } from 'react';
import Originals from './components/originals';
import MoviesAndSeries from './components/moviesAndSeries';

function App() {

  useEffect(()=>{
    /*console.log('movies')*/
  }, [])

  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <div className='full-height'>
          <Header />
          <Routes >
            <Route path='/' element = {<Home />}/>
            <Route path='/search' element = {<Search />}/>
            <Route path='/originals' element = {<Originals />}/>
            <Route path='/movies' element = {<MoviesAndSeries />}/>
            <Route path='/series' element = {<MoviesAndSeries />}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
