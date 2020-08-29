/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// React
import React, {Fragment, useState} from 'react';

// Service
import { registrationService } from 'services/AuthenticationService'

function Registration(params) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [responseStatus, setResponseStatus] = useState("");


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
        registrationService(username, email, password, registrationSuccessful, registrationError)

    }

    function registrationSuccessful() {
        window.location.reload();
    }

    function registrationError(error) {
        if (error.response != undefined) {
            setResponseStatus("Error " + error.response.status)
        }
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

                <div css={registrationErrorStyles}>
                    {responseStatus}
                </div>

            </div>
        </Fragment>
    );
}

export default Registration;

const registrationErrorStyles = () =>
    css`
    margin-top: 60px;
    text-align: center;
    font-size: 13px;
    color: red;
    `;
