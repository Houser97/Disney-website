import '../styles/header.css';

const Header = () => {
    return(
        <header>
            <div className='options-header'>
                <div className='logo'></div>
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