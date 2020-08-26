// React
import React from 'react';

// Components
import AuthenticationService from 'services/AuthenticationService';


function ChatTitle() {

    const [username, setUsername] = React.useState("")

    React.useEffect(() => {
      setUsername(localStorage.getItem("user"))
    }, []);

    function logout() {
        AuthenticationService.logoutService()
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
