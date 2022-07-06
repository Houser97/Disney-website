import '../styles/search.css';

const Search = () => {
    return(
        <div className='search-section'>
        <div className='search-container'>
            <form className='search-form'>
                <input id='search-movie' className='input' name='search' placeholder='Search by title'></input>
                <div className='effect-background'></div>
            </form>
        </div>
        <div className='filtered-movies'>

        </div>
    </div>
    )
}

export default Search;