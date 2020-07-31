import React, {Fragment} from 'react';

import MessageText from './MessageContent/MessageText';
import MessageTime from './MessageContent/MessageTime';

function YourMessage() {
    var messageText = "Ok then"
    var messageTime = "Apr 16"

    return (
        <Fragment>
            <div class="message-row you-message">
                <div class="message-content">
                    <MessageText messageText={messageText}/>
                    <MessageTime messageTime={messageTime}/>
                </div>
            </div>
        </Fragment>
  );
}

export default YourMessage;
