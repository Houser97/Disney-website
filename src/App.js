import './App.css';
import Header from './components/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';

function App() {
  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <div className='full-height'>
          <Header />
          <Routes >
            <Route path='/' element = {<Home />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
