import { useEffect } from 'react';
import '../styles/logInSection.css';

const LogInSection = ({headerRef, footerRef}) => {

    useEffect(() => {
        headerRef.current.style.display = "none";
        footerRef.current.style.display = "none";
        let headerRefVariable = headerRef.current;
        let footerRefVariable = footerRef.current;

        return () => {
            headerRefVariable.style.display = "flex";
            footerRefVariable.style.display = "flex";
        }
    })

    return(
        <div className='log-in-section'>
            <form className='form-log-in'>
                <div className='image-log-in'></div>
                <div className='input-label-login'>
                    <label htmlFor='login'>Log in with your email</label>
                    <input id='login' className='input-login' type="email"></input>
                </div>
                <div className='button-login-section'>
                    <button className='button-login'>CONTINUE</button>
                </div>
            </form>
            <div className='sign-up-secction'>
                New to Disney+? <div className='signup-link'>Sign up</div>
            </div>
        </div>
    )
}

export default LogInSection;