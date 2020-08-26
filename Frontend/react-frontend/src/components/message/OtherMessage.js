// React
import React, {Fragment} from 'react';

// Components
import MessageText from 'components/message/messageContent/MessageText';
import MessageTime from 'components/message/messageContent/MessageTime';


function OtherMessage() {

    var messageText = `
        Yeah I think it's best we do that. Otherwise things won't
        work well at all. I'm adding more text here to test the
        sizing of the speech bubble and the wrapping of it too.`

    var messageTime = "Apr 16"

    return (
        <Fragment>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src="images/profiles/daryl.png" alt="Daryl Duckmanton"/>
                    <MessageText messageText={messageText}/>
                    <MessageTime messageTime={messageTime}/>
                </div>
            </div>
        </Fragment>
    );
}

export default OtherMessage;
