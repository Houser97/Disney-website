import { useEffect } from 'react';
import '../styles/logInSection.css';
import Logo from "../images/disney-logo.png";
import FormLogIn from './formLogIn';

const LogInSection = ({headerRef}) => {



    useEffect(() => {
        headerRef.current.style.display = "none";
        let headerRefVariable = headerRef.current;

        return () => {
            headerRefVariable.style.display = "flex";
        }
    })


    return(
        <div className='log-in-section'>
            <div className='image-log-in'>
                <img src={Logo} alt = "disney-logo" className='disney-logo-login'></img>
            </div>
            <FormLogIn />
            <div className='sign-up-section'>
                New to Disney+? <div className='signup-link'>Sign up</div>
            </div>
        </div>
    )
}

export default LogInSection;