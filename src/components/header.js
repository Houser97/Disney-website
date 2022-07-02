import '../styles/header.css';
import logo from '../images/disney-logo.png';

const Header = () => {
    return(
        <header>
            <div className='options-header'>
                <div className='logo'>
                    <img className='img-logo' src = {logo} alt = "logo disney"></img>
                </div>
                <div className='home option'>HOME</div>
                <div className='search option'>SEARCH</div>
                <div className='watchlist option'>WATCHLIST</div>
                <div className='originals option'>ORIGINALS</div>
                <div className='movies option'>MOVIES</div>
                <div className='series option'>SERIES</div>
            </div>
            <div className='profile'>
                Here goes image profile
            </div>
        </header>
    )
}

export default Header;