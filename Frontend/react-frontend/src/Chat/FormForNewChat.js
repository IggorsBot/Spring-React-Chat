/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// React
import React, {Fragment, useState} from 'react';

// Components
import {getUsersForNewChat, addHandler, newChat} from './util/ws'

// Third-party
import Modal from 'react-modal';


Modal.setAppElement("#root")

function FormForNewChat() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [foundedUsersList, setFoundedUsersList] = useState({
        activeStateUsers: null,
        users: []
    });
    const [usernameForSearch, setUsernameForSearch] = useState("");
    const [userForNewChat, setUserForNewChat] = useState("");

    React.useEffect(() => {
        addHandler("UserListHandler", (data) => {
            setFoundedUsersList({...foundedUsersList, users: data, activeStateUsers: null})
        });
    }, []);

    React.useEffect(() => {
        getUsersForNewChat({username: usernameForSearch})
    }, [usernameForSearch]);

    function handleSearchUser(evt) {
        if (evt.target.value.length === 0) {
            setFoundedUsersList({...foundedUsersList, users: [], activeStateUsers: null})
            return
        }
        setUsernameForSearch(evt.target.value)
    }

    function createNewChat () {
        if (userForNewChat.length > 0) {
            newChat({username: userForNewChat})
            setUserForNewChat("")
        }
    }

    function closeModal () {
        setFoundedUsersList({...foundedUsersList, users: [], activeStateUsers: null})
        setModalIsOpen(false)
    }

    function toggleActive(index) {
        setFoundedUsersList({...foundedUsersList, activeStateUsers: foundedUsersList.users[index]})

    }

    function toggleActiveStyles(index) {
        if (foundedUsersList.users[index] === foundedUsersList.activeStateUsers) {
            return "user-active";
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
                    {foundedUsersList.users.slice(0,3).map((user, index) => {
                        return (
                            <div css={userInFoundedUsersList}
                                 className={toggleActiveStyles(index)}
                                 key={index}
                                 onClick={() => {setUserForNewChat(user); toggleActive(index)}}>
                                <img />
                                <p>{user}</p>
                            </div>
                        )
                    })}
                </div>

                <button
                    type="button"
                    className={userForNewChat.length > 0 ? "button button-activate" : "button button-deactivate"}
                    onClick={() => {createNewChat(); closeModal()}}
                >
                    Create
                </button>

                <button
                    type="button"
                    className="button button-cancel"
                    onClick={() => closeModal()}
                >
                    Exit
                </button>

            </Modal>
        </Fragment>
    );
}

export default FormForNewChat;


const newChatForm = () =>
    css`
    position: absolute;

    top: 20%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);

    min-width: 500px;
    max-width: 500px;

    min-height: 400px;
    max-height: 400px;

    background-color: white;
    overflow: hidden;
    outline:0;
    border-style: solid;
    border-radius: 10px;
    border-color: #eee;

    padding: 50px 80px;
    text-align: center;

    h1 {
        align-items: center;
        color: #0048AA;
        font-weight: bold;
        font-size: 2.0rem;
        padding: 0 20px;
    }

    .button {
        position: absolute;
        display: block;
        width: 80px;
        height: 40px;
        border: none;
        background-size: 200%;
        color: #fff;
        outline: none;
        cursor: pointer;
        transition: .5s;
        }
    }

    .button-activate {
        right:    80px;
        bottom:   50px;
        background: #0048AA;
    }

    .button-deactivate {
        right:    80px;
        bottom:   50px;
        display: block;
        background: #5082c7;
        }
    }

    .button-cancel {
        bottom:   50px;
        background: #0048AA;
    }

    .user-active {
        background-color: #bbdefb;
    }
    `;


const userInFoundedUsersList = () =>
    css`
    font-size: 1.3rem;
    padding: 0px 10px 0px 15px;
    font-weight: bold;
    padding: 10px 5px;
    display: flex;
    align-items:center;

    p {
        padding-left: 20px; */
    }

    :hover {
        cursor: pointer;
        background-color: #bbdefb;
    }

    img {
        height: 40px;
        width: 40px;
        border-radius: 100%;
    }
    `;
