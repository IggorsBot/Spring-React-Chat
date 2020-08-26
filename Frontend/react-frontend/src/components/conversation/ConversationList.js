// React
import React, {Fragment} from 'react';

// Components
import Conversation from 'components/conversation/Conversation';
import {getConversationList, addHandler} from './../util/ws'


function ConversationList() {

    const [chatList, setChatList] = React.useState([])

    React.useEffect(() => {
        getConversationList()

        addHandler("NewChatHandler", (data) => {
            setChatList(chatList => [...chatList, data])
        });
    }, []);

    // React.useEffect(() => {
    //     get
    // }, []);

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
