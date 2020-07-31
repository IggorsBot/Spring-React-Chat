import React, {Fragment} from 'react';

import MessageText from './MessageContent/MessageText';
import MessageTime from './MessageContent/MessageTime';


function OtherMessage() {

    var messageText = `
        Yeah I think it's best we do that. Otherwise things won't
        work well at all. I'm adding more text here to test the
        sizing of the speech bubble and the wrapping of it too.`

    var messageTime = "Apr 16"

    return (
        <Fragment>
            <div class="message-row other-message">
                <div class="message-content">
                    <img src="images/profiles/daryl.png" alt="Daryl Duckmanton"/>
                    <MessageText messageText={messageText}/>
                    <MessageTime messageTime={messageTime}/>
                </div>
            </div>
        </Fragment>
  );
}

export default OtherMessage;
