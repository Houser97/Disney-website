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
import Watchlist from './components/watchlist';
import { createContext } from 'react';
import { auth, setDocument } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { recoverDoc } from './firebase';
import { setDocumentMovie } from './firebase';

export const userContext = createContext()

async function checkIfUserIsLogged(setUserID, userID){
  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserID(user.uid)
        //console.log(userID);
        //console.log(`user logged in`);
        // ...
      } else {
        // User is signed out
        // ...
        //console.log("no user here")
        setUserID(null)
      }
    })
}

function App() {

  const [moviesFiltered, setMoviesFiltered] = useState(movies);
  const [seriesFiltered, setSeriesFiltered] = useState(movies);
  const [usernameHeader, setUsernameHeader] = useState(null);
  const [userPictureHeader, setUserPictureHeader] = useState(null);
  const [shouldRegisterNewUser, setShouldRegisterNewUser] = useState("no");

  const [shouldHeaderRender, setShouldHeaderRender] = useState("no");

  const [moviesInWatchList, setMoviesInWatchList] = useState([]);

  const [userID, setUserID] = useState(null);

  // Guardar películas en Firestore //
  useEffect(() => {
    //console.log(moviesInWatchList);//
    if(moviesInWatchList.length !== 0){
      setDocumentMovie(userPictureHeader, usernameHeader, userID, moviesInWatchList)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesInWatchList])

    // Guardar usuarios nuevos //
  useEffect(() => {
    checkIfUserIsLogged(setUserID, userID);
    //console.log(userID);//
    async function waitUntilDocSet(){
      if(userPictureHeader !== null && userID !== null){      
        //console.log("done")//
        /*addUserData(userID, usernameHeader, userPictureHeader);*/
        await setDocument(userPictureHeader, usernameHeader, userID, moviesInWatchList);
        setShouldRegisterNewUser("no");
      }
    }
    if(shouldRegisterNewUser === "yes"){
      waitUntilDocSet();
    }
    setShouldHeaderRender("yes");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRegisterNewUser])

  const header = useRef(null);
  const footer = useRef(null)

  useEffect(()=>{
    const moviesToShow = movies.filter(movie => movie.isMovie === true);
    const seriesToShow = movies.filter(serie => serie.isMovie === false);
    setMoviesFiltered(moviesToShow);
    setSeriesFiltered(seriesToShow);  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

// Recuperar datos apenas cambie el usuarioID //
  useEffect(() => {
    if(userID !== null && shouldRegisterNewUser !== "no"){
      const getDataAsync = async() => {
          const userData = await recoverDoc(userID);
          if(userData !== null){
            setUsernameHeader(userData.username);
            setUserPictureHeader(userData.image);
            setMoviesInWatchList(userData.movies);
            // Renderizar Header cuando se recupera la información //
            setShouldHeaderRender("yes");
        }
      }
      getDataAsync();
  } else {
    setUsernameHeader(null);
    setUserPictureHeader(null);
    setMoviesInWatchList([])
  }
  }, [userID, shouldRegisterNewUser])

  const valueProvider = [userID, setMoviesInWatchList, moviesInWatchList, setShouldRegisterNewUser,
  setUserPictureHeader, setUsernameHeader]

  return (
    <BrowserRouter basename='Disney-website/'>
      <userContext.Provider value={valueProvider}>
        <div className="App">
          <div className='full-height'>
            <Header headerRef={header} userID = {userID} shouldRender = {shouldHeaderRender} setShouldRender ={setShouldHeaderRender} username = {usernameHeader} userPicture = {userPictureHeader} />
            <Routes >
              <Route path='/' element = {<Home />}/>
              <Route path='/search' element = {<Search />}/>
              <Route path='/watchlist' element = {<Watchlist userID={userID} />} ></Route>
              <Route path='/originals' element = {<Originals key={"originals-component"} headerRefPlaceholder = {header}/>}/>
              <Route path='/movies' element = {<MoviesAndSeries key={"movieSectionRender"} moviesSeries={moviesFiltered} titleSection = {"Movies"}  headerRefPlaceholder = {header} />} ></Route>
              <Route path='/series' element = {<MoviesAndSeries key={"serieSectionRender"} moviesSeries={seriesFiltered} titleSection = {"Series"} headerRefPlaceholder = {header} />} ></Route>
              <Route path='/login' element = {<LogInSection formToOpen={"1"} key={"logInSection"} headerRef={header} footerRef = {footer} setUserID ={setUserID} userID = {userID} setUsername1 ={setUsernameHeader} />} ></Route>
              <Route path='/signup' element = {<LogInSection formToOpen={"2"} key={"signUpSection"} headerRef={header} footerRef = {footer} setUserID ={setUserID} userID = {userID} setUsername1 ={setUsernameHeader} />} ></Route>
              <Route path="/avatar" element = {<ChooseAvatar headerRef={header} footerRef ={footer} setUserPicture = {setUserPictureHeader} />} ></Route>
            </Routes>
            <Footer footerRef = {footer}/>
          </div>
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export {App, checkIfUserIsLogged};
