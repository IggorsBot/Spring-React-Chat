// React
import React, {Fragment, useState} from 'react';

// Components
import Registration from './Registration';
import Login from './Login';


function Auth() {

    const [isLogin, setLogin] = useState(true);


    return (
        <Fragment>
            <div id="auth-container">
                <div id="auth-left-side"></div>
                {isLogin ?
                    <Login setLogin={setLogin}/> :
                    <Registration setLogin={setLogin}/>}
            </div>
        </Fragment>
    );
}

export default Auth;
