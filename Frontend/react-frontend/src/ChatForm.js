import React, {Fragment} from 'react';


function ChatForm() {

  return (
      <Fragment>
          <div id="chat-form">
              <img src="images/icons/attachment-logo.svg" alt="Add Attachment" />
              <input type="text" placeholder="type a message"/>
          </div>
      </Fragment>
  );
}

export default ChatForm;
