import React, {Fragment} from 'react';

import SearchContainer from './SearchContainer';
import ConversationList from './Conversation/ConversationList';
import NewMessageContainer from './NewMessageContainer';
import ChatTitle from './ChatTitle';
import ChatMessageList from './Message/ChatMessageList';
import ChatForm from './ChatForm';


function ChatContainer() {
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
