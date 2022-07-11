import './App.css';
import Header from './components/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Search from './components/search';
import Footer from './components/footer';
import { useEffect, useRef, useState } from 'react';
import Originals from './components/originals';
import MoviesAndSeries from './components/moviesAndSeries';
import movies from './moviesObject';
import LogInSection from './components/logInSection';
import ChooseAvatar from './components/chooseAvatar';
import { auth, setDocument } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


async function checkIfUserIsLogged(setUserID, userID){
  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserID(user.uid)
        console.log(userID);
        console.log(`user logged in`);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("no user here")
        setUserID(null)
      }
    })
}

function App() {

  const [moviesFiltered, setMoviesFiltered] = useState(movies);
  const [seriesFiltered, setSeriesFiltered] = useState(movies);
  const [usernameHeader, setUsernameHeader] = useState(null);
  const [userPictureHeader, setUserPictureHeader] = useState(null);

  const [shouldHeaderRender, setShouldHeaderRender] = useState("no");

  const [userID, setUserID] = useState(null);

  useEffect(() => {
    checkIfUserIsLogged(setUserID, userID);
    console.log(userID);
    async function waitUntilDocSet(){
      if(userPictureHeader !== null && userID !== null){      
        console.log("done")
        /*addUserData(userID, usernameHeader, userPictureHeader);*/
        await setDocument(usernameHeader, userPictureHeader, userID)
      }
    }
    waitUntilDocSet();
    setShouldHeaderRender("yes")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userPictureHeader, usernameHeader, userID])

  const header = useRef(null);
  const footer = useRef(null)

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
          <Header headerRef={header} userID = {userID} shouldRender = {shouldHeaderRender} setShouldRender ={setShouldHeaderRender} />
          <Routes >
            <Route path='/' element = {<Home />}/>
            <Route path='/search' element = {<Search />}/>
            <Route path='/originals' element = {<Originals key={"originals-component"} />}/>
            <Route path='/movies' element = {<MoviesAndSeries key={"movieSectionRender"} moviesSeries={moviesFiltered} titleSection = {"Movies"} />}/>
            <Route path='/series' element = {<MoviesAndSeries key={"serieSectionRender"} moviesSeries={seriesFiltered} titleSection = {"Series"} />}/>
            <Route path='/login' element = {<LogInSection formToOpen={"1"} key={"logInSection"} headerRef={header} footerRef = {footer} setUserID ={setUserID} userID = {userID} setUsername1 ={setUsernameHeader} />} ></Route>
            <Route path='/signup' element = {<LogInSection formToOpen={"2"} key={"signUpSection"} headerRef={header} footerRef = {footer} setUserID ={setUserID} userID = {userID} setUsername1 ={setUsernameHeader} />} ></Route>
            <Route path="/avatar" element = {<ChooseAvatar headerRef={header} footerRef ={footer} setUserPicture = {setUserPictureHeader} />} ></Route>
          </Routes>
          <Footer footerRef = {footer}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export {App, checkIfUserIsLogged};
