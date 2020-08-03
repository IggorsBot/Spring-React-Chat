// React
import React, {Fragment} from 'react';

// Components
import Conversation from './Conversation';


function ConversationList() {

    return (
        <Fragment>
            <div id="conversation-list">
                <Conversation isActive={true} />
                <Conversation isActive={false} />
                <Conversation isActive={false} />
                <Conversation isActive={false} />
                <Conversation isActive={false} />
            </div>
        </Fragment>
    );
}

export default ConversationList;
