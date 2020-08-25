/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// React
import React, {Fragment, useState} from 'react';

// Components
import {getUsernames, addHandler, newChat} from './../util/ws'

// Third-party
import Modal from 'react-modal';

// CSS
import { newChatForm, userInFoundedUsersList, foundedUsersList } from './FormForNewChatCSS';


Modal.setAppElement("#root")

function FormForNewChat() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [foundedUsers, setFoundedUsers] = useState({
        activeStateUsers: null,
        users: []
    });
    const [searchUser, setSearchUser] = useState("");
    const [userForNewChat, setUserForNewChat] = useState("");

    React.useEffect(() => {
        addHandler("UserListHandler", (data) => {
            setFoundedUsers({...foundedUsers, users: data, activeStateUsers: null})
        });
    }, []);

    React.useEffect(() => {
        getUsernames({username: searchUser})
    }, [searchUser]);

    function handleSearchUser(evt) {
        if (evt.target.value.length === 0) {
            setFoundedUsers({...foundedUsers, users: [], activeStateUsers: null})
            return
        }
        setSearchUser(evt.target.value)
    }

    function createNewChat () {
        if (userForNewChat.length > 0) {
            newChat({username: userForNewChat})
            setUserForNewChat("")
        }
    }

    function closeModal () {
        setFoundedUsers({...foundedUsers, users: [], activeStateUsers: null})
        setModalIsOpen(false)
    }

    function toggleActive(index) {
        setFoundedUsers({...foundedUsers, activeStateUsers: foundedUsers.users[index]})
    }

    function toggleActiveStyles(index) {
        if (foundedUsers.users[index] === foundedUsers.activeStateUsers) {
            return "active";
        } else {
            return ""
        }
    }

    return (
        <Fragment>
            <div id="new-message-container">
                <a href="#" onClick={() => setModalIsOpen(true)}>+</a>
            </div>

            <Modal isOpen={modalIsOpen}
                shouldCloseOnOverlayClick
                onRequestClose={() => closeModal()}
                css={newChatForm}
                overlayClassName="Overlay"
            >

                <h1>New Chat</h1>

                <div className="modal-text">
                    <input type="text" placeholder="Username" name="password_confirm" onChange={handleSearchUser}/>
                </div>

                <div css={foundedUsersList}>
                {foundedUsers.users.slice(0,3).map((user, index) => {
                    return (
                        <div css={userInFoundedUsersList} className={toggleActiveStyles(index)} key={index} onClick={() => {setUserForNewChat(user); toggleActive(index)}}>
                            <img />
                            <p>{user}</p>
                        </div>
                    )
                })}
                </div>


                <button
                    type="button"
                    className={userForNewChat.length > 0 ? "button-new-chat" : "button-new-chat-deactivate"}
                    onClick={() => {createNewChat(); closeModal()}}
                >
                    Create
                </button>

                <button
                    type="button"
                    className="button-cancel"
                    onClick={() => closeModal()}
                >
                    Exit
                </button>



            </Modal>
        </Fragment>
    );
}

export default FormForNewChat;
