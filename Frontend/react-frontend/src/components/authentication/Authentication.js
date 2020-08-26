// React
import React, {Fragment, useState} from 'react';

// Components
import Registration from 'components/authentication/Registration';
import Login from 'components/authentication/Login';


function Authentication() {

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

export default Authentication;
