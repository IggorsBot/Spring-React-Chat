// React
import React from 'react';

// Components
import AuthService from './services/AuthService';


function ChatTitle() {

    const [username, setUsername] = React.useState("")

    React.useEffect(() => {
      setUsername(localStorage.getItem("user"))
    }, []);

    function logout() {
        AuthService.logout()
        window.location.reload()
    }

    return (
        <React.Fragment>
            <div id="chat-title">
                <span>{username}</span>
                <img src="icons/logout.png" height="20px" width="20px" alt="Logout" onClick={logout}/>
            </div>
        </React.Fragment>
    );
}

export default ChatTitle;
