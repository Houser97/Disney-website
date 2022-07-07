import '../styles/optionDropdownMenu.css'

const OptionDropdownMenu = ({option}) => {
    return(
        <div className='option'>
            <span className='span-effect-option'></span>
            <div className='option-name'>{option}</div>   
        </div>   
    )
}

export default OptionDropdownMenu