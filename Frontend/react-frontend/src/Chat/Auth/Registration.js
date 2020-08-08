// React
import React, {Fragment} from 'react';


function Registration(params) {

    return (
        <Fragment>
            <div className="auth-form">
                <h1>Registration</h1>

                <div className="auth-text">
                  <input type="text" placeholder="Username" name="email"/>
                  <span data-placeholder="Username"></span>
                </div>

                <div className="auth-text">
                  <input type="password" placeholder="Password" name="password"/>
                  <span data-placeholder="Password"></span>
                </div>

                <div className="auth-text">
                  <input type="password" placeholder="Repeat password" name="password_confirm"/>
                  <span data-placeholder="Password"></span>
                </div>

                <input type="submit" className="auth-btn" value="Registration"/>

                <div className="bottom-text">
                    Have you an account? <span className="link" onClick={() => params .setLogin(true)}>Sing in</span>
                </div>

            </div>
        </Fragment>
    );
}

export default Registration;
