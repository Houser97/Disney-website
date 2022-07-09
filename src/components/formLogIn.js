import { useRef } from 'react';
import '../styles/formLogIn.css';
import { Link } from 'react-router-dom';

const FormLogIn = () => {

    const emailSection = useRef(null);
    const pwdSection = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.style.marginLeft = "-380px"
        e.target.style.opacity = 0;
        console.log(e.target.style.opacity)
    }

    return(
        <div className='form-log-in-sign-up'>
                <div className='form-data-carousel'>
                    <form ref={emailSection} className='email-section' onSubmit={handleSubmit}>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Log in with your email</label>
                            <input id='login' className='input-login' type="email" required></input>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>

                    <form ref={pwdSection} className='pdw-section' onSubmit={handleSubmit}>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Enter your password</label>
                            <input id='pwd' className='input-login' type="password" required></input>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>
                </div>
                <div className='sign-up-section'>
                    New to Disney+? 
                    <Link to = "/signup" className='link'>
                        <div className='signup-link'>Sign up</div>
                    </Link>
                </div>
            </div>
    )
}

export default FormLogIn;