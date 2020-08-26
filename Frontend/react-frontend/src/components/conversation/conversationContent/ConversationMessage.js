// React
import React, {Fragment} from 'react';


function ConversationMessage(props) {

    return (
        <Fragment>
            <div className="conversation-message">
                {props.message}
            </div>
        </Fragment>
    );
}

export default ConversationMessage;
