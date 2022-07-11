import { useEffect } from 'react';
import '../styles/logInSection.css';
import Logo from "../images/disney-logo.png";
import FormLogIn from './formLogIn';
import FormSignUp from './formSignUp';

const LogInSection = ({headerRef, formToOpen, setUsername1, setUserID, userID}) => {

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
            {formToOpen === "1" ? <FormLogIn setUserID ={setUserID} userID = {userID} /> : <FormSignUp setUsername1 = {setUsername1} />}
        </div>
    )
}

export default LogInSection;