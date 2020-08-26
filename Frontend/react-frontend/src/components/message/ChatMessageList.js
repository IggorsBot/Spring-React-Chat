// React
import React, {Fragment} from 'react';

// Components
import YourMessage from 'components/message/YourMessage';
import OtherMessage from 'components/message/OtherMessage';


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
