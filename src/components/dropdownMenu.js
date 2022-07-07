import { useState } from 'react';
import '../styles/dropdownMenu.css'
import OptionDropdownMenu from './optionDropdownMenu';

const DropdownMenu = () => {

    const [options] = useState(["ALL MOVIES A-Z",
                                "ANIMATION",
                                "KIDS"]);

    return(
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
                {options.map(function iterateOptions(option, iterator){
                    return(
                        <OptionDropdownMenu key={iterator} option={option}/>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default DropdownMenu;