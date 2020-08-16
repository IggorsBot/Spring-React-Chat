// React
import React, {Fragment} from 'react';

// Components
import SearchContainer from './SearchContainer';
import ConversationList from './Conversation/ConversationList';
import NewChatContainer from './NewChatContainer';
import ChatTitle from './ChatTitle';
import ChatMessageList from './Message/ChatMessageList';
import ChatForm from './ChatForm';

// Util
import {connect} from './../Chat/util/ws';


function ChatContainer() {

    React.useEffect(() => {
      connect()
    }, []);

    return (
        <Fragment>
            <div id="chat-container">
                <SearchContainer />
                <ConversationList />
                <NewChatContainer />
                <ChatTitle />
                <ChatMessageList />
                <ChatForm />
            </div>
        </Fragment>
    );
}

export default ChatContainer;
