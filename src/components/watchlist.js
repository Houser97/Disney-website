import '../styles/watchlist.css';

const Watchlist = ({userID}) => {
    return(
        <div className='watchlist-section'>
            {userID === null ? (
                <div className='watchlist-userID-null'>
                    Log In to start adding movies to the watchlist
                </div>
            ):(
                <div className='watchlist-userID-noNull'>
                    Watchlist is empty
                </div>
            )}
        </div>
    )
}

export default Watchlist;