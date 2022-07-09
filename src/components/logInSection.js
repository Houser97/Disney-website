import { useEffect, useRef } from 'react';
import '../styles/logInSection.css';
import Logo from "../images/disney-logo.png";

const LogInSection = ({headerRef}) => {

    const emailSection = useRef(null);
    const pwdSection = useRef(null);

    useEffect(() => {
        headerRef.current.style.display = "none";
        let headerRefVariable = headerRef.current;

        return () => {
            headerRefVariable.style.display = "flex";
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        emailSection.current.style.marginLeft = "-400px"
        emailSection.current.style.opacity = 0;

        pwdSection.current.style.right = "0px"
        pwdSection.current.style.opacity = 1;

    }

    return(
        <div className='log-in-section'>
            <form className='form-log-in' onSubmit={handleSubmit}>
                <div className='image-log-in'>
                    <img src={Logo} alt = "disney-logo" className='disney-logo-login'></img>
                </div>
                <div className='form-data-carousel'>
                    <div ref={emailSection} className='email-section'>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Log in with your email</label>
                            <input id='login' className='input-login' type="email" required></input>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </div>

                    <div ref={pwdSection} className='pdw-section'>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Enter your password</label>
                            <input id='pwd' className='input-login' type="password" required></input>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className='sign-up-section'>
                New to Disney+? <div className='signup-link'>Sign up</div>
            </div>
        </div>
    )
}

export default LogInSection;