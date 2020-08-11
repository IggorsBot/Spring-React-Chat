// React
import React, {Fragment} from 'react';

// Components
import SearchContainer from './SearchContainer';
import ConversationList from './Conversation/ConversationList';
import NewMessageContainer from './NewMessageContainer';
import ChatTitle from './ChatTitle';
import ChatMessageList from './Message/ChatMessageList';
import ChatForm from './ChatForm';

// Third-Party
import {connect} from './Chat/util/ws';


function ChatContainer() {
    // connect()

    return (
        <Fragment>
            <div id="chat-container">
                <SearchContainer />
                <ConversationList />
                <NewMessageContainer />
                <ChatTitle />
                <ChatMessageList />
                <ChatForm />
            </div>
        </Fragment>
    );
}

export default ChatContainer;
