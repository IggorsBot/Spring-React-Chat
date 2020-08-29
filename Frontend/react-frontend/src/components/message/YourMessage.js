// React
import React, {Fragment} from 'react';

// Components
import MessageText from 'components/message/messageContent/MessageText';
import MessageTime from 'components/message/messageContent/MessageTime';

function YourMessage() {
    var messageText = "Ok then"
    var messageTime = "Apr 16"

    return (
        <Fragment>
            <div className="message-row you-message">
                <div className="message-content">
                    <MessageText messageText={messageText}/>
                    <MessageTime messageTime={messageTime}/>
                </div>
            </div>
        </Fragment>
    );
}

export default YourMessage;
