// React
import React, {Fragment} from 'react';


function MessageText(props) {

    return (
        <Fragment>
            <div className="message-text">
                {props.messageText}
            </div>
        </Fragment>
    );
}

export default MessageText;
