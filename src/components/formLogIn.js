import { useRef } from 'react';
import '../styles/formLogIn.css';

const FormLogIn = () => {

    const emailSection = useRef(null);
    const pwdSection = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailSection.current.style.marginLeft = "-400px"
        emailSection.current.style.opacity = 0;

        pwdSection.current.style.right = "0px"
        pwdSection.current.style.opacity = 1;

    }

    return(
        <form className='form-log-in-sign-up' onSubmit={handleSubmit}>
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
    )
}

export default FormLogIn;