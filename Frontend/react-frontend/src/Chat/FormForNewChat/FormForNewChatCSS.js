import { css } from "@emotion/core";


export const newChatForm = () =>
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

    .button-new-chat {
        position: absolute;
        right:    80px;
        bottom:   50px;
        display: block;
        width: 80px;
        height: 40px;
        border: none;
        background: #0048AA;
        background-size: 200%;
        color: #fff;
        outline: none;
        cursor: pointer;
        transition: .5s;
        }
    }

    .button-new-chat-deactivate {
        position: absolute;
        right:    80px;
        bottom:   50px;
        display: block;
        width: 80px;
        height: 40px;
        border: none;
        background: #5082c7;
        background-size: 200%;
        color: #fff;
        outline: none;
        cursor: pointer;
        transition: .5s;
        }
    }

    .button-cancel {
        position: absolute;
        bottom:   50px;
        display: block;
        width: 80px;
        height: 40px;
        border: none;
        background: #0048AA;
        background-size: 200%;
        color: #fff;
        outline: none;
        cursor: pointer;
        transition: .5s;
    }
    `;


export const foundedUsersList = () =>
    css`
    .active {
        background-color: #bbdefb;
    }
    `;

export const userInFoundedUsersList = () =>
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
