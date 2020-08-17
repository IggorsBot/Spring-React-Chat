// React
import React, {Fragment, useState} from 'react';

// Components
import {getUsernames, addHandler, newChat} from './util/ws'

// Third-party
import Modal from 'react-modal';


Modal.setAppElement("#root")

function NewChatContainer() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [usernames, setUsernames] = useState([]);
    const [searchUser, setSearchUser] = useState("");

    React.useEffect(() => {
        addHandler("UserListHandler", (data) => {
            setUsernames(data)
        });
    }, []);

    React.useEffect(() => {
        getUsernames({username: searchUser})
    }, [searchUser]);

    function handleSearchUser(evt) {
        setSearchUser(evt.target.value)
    }

    const createNewChat = username => {
        newChat({username: username})
    }

    return (
        <Fragment>
            <div id="new-message-container">
                <a href="#" onClick={() => setModalIsOpen(true)}>+</a>
            </div>

            <Modal isOpen={modalIsOpen}
                shouldCloseOnOverlayClick
                onRequestClose={() => setModalIsOpen(false)}
                className="new-chat-form"
                overlayClassName="Overlay">

                <h1>New Chat</h1>

                <div className="modal-text">
                    <input type="text" placeholder="Username" name="password_confirm" onChange={handleSearchUser}/>
                </div>

                <div className="users">
                {usernames.slice(0,3).map((username, index) => {
                    return (
                        <div className="username" key={index} onClick={() => createNewChat(username)}>
                            <img />
                            <p>{username}</p>
                        </div>
                    )
                })}
                </div>
            </Modal>
        </Fragment>
    );
}

export default NewChatContainer;
