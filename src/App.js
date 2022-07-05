import './App.css';
import Header from './components/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <div className='full-height'>
          <Header />
          <Routes >
            <Route path='/' element = {<Home />}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
