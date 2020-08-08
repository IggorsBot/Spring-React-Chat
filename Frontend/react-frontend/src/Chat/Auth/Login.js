// React
import React, {Fragment} from 'react';


function Login(params ) {

    return (
        <Fragment>
            <div className="auth-form">
                <h1>Login</h1>
                <div className="auth-text">
                  <input type="text" placeholder="Username" name="email"/>
                  <span data-placeholder="Username"></span>
                </div>

                <div className="auth-text">
                  <input type="password" placeholder="Password" name="password"/>
                  <span data-placeholder="Password"></span>
                </div>

                <input type="submit" value="Login" className="auth-btn"/>

                <div className="bottom-text">
                  Don't have account? <span className="link" onClick={() => params .setLogin(false)}>Sign up</span>
                </div>

            </div>
        </Fragment>
    );
}

export default Login;
