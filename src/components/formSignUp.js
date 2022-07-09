import { useRef } from 'react';
import '../styles/formSignUp.css';
import { useNavigate } from 'react-router-dom';

const FormSignUp = () => {
    let navigate = useNavigate();

    const emailSection = useRef(null);
    const pwdSection = useRef(null);
    const pwdSectionRepeat = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.style.marginLeft = "-380px"
        e.target.style.opacity = 0;
        navigate("/");
    }

    return(
        <div className='form-log-in-sign-up'>
                <div className='form-data-carousel'>
                    <form ref={emailSection} className='email-section' onSubmit={handleSubmit}>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Enter your email</label>
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

                    <form ref={pwdSectionRepeat} className='pdw-section'>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Enter your password</label>
                            <input id='pwdRepeat' className='input-login' type="password" required></input>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default FormSignUp;