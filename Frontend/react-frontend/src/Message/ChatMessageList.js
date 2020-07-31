import React, {Fragment} from 'react';

import YourMessage from './YourMessage';
import OtherMessage from './OtherMessage';

function ChatMessageList() {

  return (
      <Fragment>
          <div id="chat-message-list">
              <YourMessage />
              <OtherMessage />
          </div>
      </Fragment>
  );
}

export default ChatMessageList;
