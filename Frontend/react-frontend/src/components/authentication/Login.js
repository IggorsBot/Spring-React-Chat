/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// React
import React, {Fragment, useState} from 'react';

// Components
import AuthenticationService from 'services/AuthenticationService';


function Login(params) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    function handleUsername(evt) {
        setUsername(evt.target.value)
    }

    function handlePassword(evt) {
        setPassword(evt.target.value)
    }

    function login () {
        AuthenticationService.loginService(username, password, loginSuccessful, loginError)
    }

    function loginSuccessful() {
        window.location.reload();
    }

    function loginError(error) {
        if (error.response != undefined) {
            if (error.response.status === 403) {
                setStatus("403 Forbidden")
            }
            else {
                setStatus("Error")
            }
        }
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

                <div css={loginErrorStyles}>
                    {status}
                </div>
            </div>
        </Fragment>
    );
}

export default Login;

const loginErrorStyles = () =>
    css`
    margin-top: 60px;
    text-align: center;
    font-size: 13px;
    color: red;
    `;
