import './App.css';
import Header from './components/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <div className='full-height'>
          <Header />
          <Routes >
            <Route path='/'/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
