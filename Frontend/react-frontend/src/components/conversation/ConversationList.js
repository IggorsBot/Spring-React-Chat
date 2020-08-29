// React
import React, {Fragment} from 'react';

// Components
import Conversation from 'components/conversation/Conversation'
import { addHandler} from 'util/WebSocketConfig'
import { NEW_CHAT } from 'util/PathAPI'
import { getChatListService } from 'services/ChatService'

function ConversationList() {

    const [chatList, setChatList] = React.useState([])

    React.useEffect(() => {
        getChatListService()

        addHandler(NEW_CHAT, (data) => {
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
