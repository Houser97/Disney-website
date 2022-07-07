import './App.css';
import Header from './components/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Search from './components/search';
import Footer from './components/footer';
import movies from './moviesObject';
import { useEffect } from 'react';

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
            <Route path='/home' element = {<Home />}/>
            <Route path='/search' element = {<Search />}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
