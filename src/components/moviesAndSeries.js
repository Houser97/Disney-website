import '../styles/moviesAndSeries.css';

const MoviesAndSeries = () => {
    return(
        <div className='moviesAndSeries-section'>
            <div className='title-section-placeholder'>
                <div className='title-section-container'>
                    <div className='title-section'>Here goes title</div>
                    <div className='drop-down-menu-section'>
                        <div className='drop-down-menu'>
                            <div className='icon-result'>
                                <div className='result-dropmenu'>Here goes result</div>
                                <div className='icon-arrow'>
                                    <svg className='chevron-down' viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='options'>
                                <div className='option'>
                                    <span className='span-effect-option'></span>
                                    <div className='option-name'>ALL MOVIES A-Z</div>    
                                </div>
                                <div className='option'>
                                    <span className='span-effect-option'></span>
                                    <div className='option-name'>KIDS</div>    
                                </div>
                                <div className='option'>
                                    <span className='span-effect-option'></span>
                                    <div className='option-name'>ANIMATION</div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-cards'></div>
        </div>
    )
}

export default MoviesAndSeries;