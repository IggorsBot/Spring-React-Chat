import React, {Fragment} from 'react';

function ConversationMessage(props) {
    return (
        <Fragment>
            <div class="conversation-message">
                {props.message}
            </div>
        </Fragment>
    );
}

export default ConversationMessage;
