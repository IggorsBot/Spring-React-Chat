// React
import React, {Fragment, useState} from 'react';

// Components
import AuthService from './services/AuthService';


function ChatTitle() {

    function logout() {
        AuthService.logout()
        window.location.reload()
    }

    return (
        <Fragment>
            <div id="chat-title">
                <span>{localStorage.getItem("user")}</span>
                <img src="icons/logout.png" height="20px" width="20px" alt="Delete Conversation" onClick={logout}/>
            </div>
        </Fragment>
    );
}

export default ChatTitle;
