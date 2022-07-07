import '../styles/moviesAndSeries.css';
import DropdownMenu from './dropdownMenu';

const MoviesAndSeries = () => {

    return(
        <div className='moviesAndSeries-section'>
            <div className='title-section-placeholder'>
                <div className='title-section-container'>
                    <div className='title-section'>Here goes title</div>
                    <DropdownMenu />
                </div>
            </div>

            <div className='section-cards'></div>
        </div>
    )
}

export default MoviesAndSeries;