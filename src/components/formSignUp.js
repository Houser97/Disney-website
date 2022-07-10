import { useEffect, useRef, useState } from 'react';
import '../styles/formSignUp.css';
import { useNavigate } from 'react-router-dom';

const FormSignUp = () => {
    let navigate = useNavigate();

    const emailSection = useRef(null);
    const pwdSection = useRef(null);
    const pwdSectionRepeat = useRef(null);
    const errorMessagePwd = useRef(null);

    const [userData, setUserData] = useState([]); 

    useEffect(() => {
        if(userData.length === 3){
            const pwd = userData[1];
            const pwdRepat = userData[2];

            if(pwd !== pwdRepat){
                errorMessagePwd.current.style.display = "flex";
            } else if(pwd === pwdRepat) {
                pwdSectionRepeat.current.style.marginLeft = "-380px";
            }
        }
        console.log(userData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData])

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.style.marginLeft = "-380px"
        e.target.style.opacity = 0;
        const formArray = [...e.target];
        const input = formArray[0].value;
        setUserData(oldArray => [...oldArray, input]);
    }

    const handlePwdSubmit = (e) => {
        e.preventDefault();
        const formArray = [...e.target];
        const input = formArray[0].value;
        setUserData(oldArray => [...oldArray, input]);
    }

    const handleLastSubmit = (e) => {
        e.preventDefault();
        const formArray = [...e.target];
        const input = formArray[0].value;
        setUserData(oldArray => [...oldArray, input]);
        navigate("/avatar");
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

                    <form ref={pwdSectionRepeat} className='pdw-section' onSubmit={handlePwdSubmit}>
                        <div className='input-label-login pwd-repeat'>
                            <label htmlFor='login'>Enter your password</label>
                            <input id='pwdRepeat' className='input-login' type="password" required></input>
                            <div ref={errorMessagePwd} className='pwds-incorrect'>Passwords do not match</div>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>

                    <form className='pdw-section-repeat username' onSubmit={handleLastSubmit}>
                        <div className='input-label-login username'>
                            <label htmlFor='username'>Enter new username</label>
                            <input id='username' className='input-login' type="text" required></input>
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