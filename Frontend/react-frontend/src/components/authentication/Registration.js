// React
import React, {Fragment, useState} from 'react';

// Components
import AuthService from 'services/AuthService';


function Registration(params) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    function handleUsername(evt) {
        setUsername(evt.target.value)
    }

    function handleEmail(evt) {
        setEmail(evt.target.value)
    }

    function handlePassword(evt) {
        setPassword(evt.target.value)
    }

    function handlePasswordRepeat(evt) {
        setPasswordRepeat(evt.target.value)
    }

    function registration () {
        AuthService.registration(username, email, password).then(() => {
                window.location.reload();
            }
        )
    }

    return (
        <Fragment>
            <div className="auth-form">
                <h1>Registration</h1>

                <form onSubmit={e => e.preventDefault()}>
                    <div className="auth-text">
                      <input type="text" placeholder="Username" name="username" onChange={handleUsername}/>
                    </div>

                    <div className="auth-text">
                      <input type="email" placeholder="Email" name="email" onChange={handleEmail}/>
                    </div>

                    <div className="auth-text">
                      <input type="password" placeholder="Password" name="password" onChange={handlePassword}/>
                    </div>

                    <div className="auth-text">
                      <input type="password" placeholder="Repeat password" name="password_confirm" onChange={handlePasswordRepeat}/>
                    </div>

                    <input type="submit" className="auth-btn" value="Registration" onClick={registration}/>
                </form>

                <div className="bottom-text">
                    Have you an account? <span className="link" onClick={() => params.setLoginPage(true)}>Sing in</span>
                </div>

            </div>
        </Fragment>
    );
}

export default Registration;
