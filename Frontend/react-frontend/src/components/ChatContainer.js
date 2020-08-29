// React
import React, {Fragment} from 'react';

// Components
import SearchContainer from './SearchContainer';
import ConversationList from './conversation/ConversationList';
import FormForNewChat from './FormForNewChat';
import ChatTitle from './ChatTitle';
import ChatMessageList from './message/ChatMessageList';
import ChatForm from './ChatForm';

// Util
import { connect } from 'util/WebSocketConfig';


function ChatContainer() {

    React.useEffect(() => {
      connect()
    }, []);

    return (
        <Fragment>
            <div id="chat-container">
                <SearchContainer />
                <ConversationList />
                <FormForNewChat />
                <ChatTitle />
                <ChatMessageList />
                <ChatForm />
            </div>
        </Fragment>
    );
}

export default ChatContainer;
