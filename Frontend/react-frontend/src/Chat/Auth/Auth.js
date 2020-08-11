// React
import React, {Fragment, useState} from 'react';

// Components
import Registration from './Registration';
import Login from './Login';


function Auth() {

    const [isLoginPage, setLoginPage] = useState(true);

    return (
        <Fragment>
            <div id="auth-container">
                <div id="auth-left-side"></div>
                {isLoginPage ?
                    <Login setLoginPage={setLoginPage} /> :
                    <Registration setLoginPage={setLoginPage}/>}
            </div>
        </Fragment>
    );
}

export default Auth;
