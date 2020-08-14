// React
import React, {Fragment, useState} from 'react';

// Components
import AuthService from './../services/AuthService';


function Login(params) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsername(evt) {
        setUsername(evt.target.value)
    }

    function handlePassword(evt) {
        setPassword(evt.target.value)
    }

    function login () {
        AuthService.login(username, password).then(() => {
                window.location.reload();
            }
        )
    }

    return (
        <Fragment>
            <div className="auth-form">
                <h1>Login</h1>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="auth-text">
                      <input type="text" placeholder="Username" name="email" onChange={handleUsername}/>
                    </div>

                    <div className="auth-text">
                      <input type="password" placeholder="Password" name="password" onChange={handlePassword}/>
                    </div>

                    <input className="auth-btn" type="submit" value="Login" onClick={login}/>
                </form>

                <div className="bottom-text">
                  Don't have account? <span className="link" onClick={() => params.setLoginPage(false)}>Sign up</span>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
