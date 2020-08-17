// React
import React, {Fragment} from 'react';

// Components
import Conversation from './Conversation';
import {getConversationList, addHandler} from './../util/ws'


function ConversationList() {

    const [chatList, setChatList] = React.useState([])

    React.useEffect(() => {
        getConversationList()

        addHandler("NewChatHandler", (data) => {
            setChatList(chatList => [...chatList, data])
        });
    }, []);

    return (
        <Fragment>
            <div id="conversation-list">
            {chatList.map((chat, index) => {
                return (
                    <Conversation isActive={false} key={index}/>
                )
            })}
            </div>
        </Fragment>
    );
}

export default ConversationList;
