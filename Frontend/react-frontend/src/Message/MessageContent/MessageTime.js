// React
import React, {Fragment} from 'react';


function MessageTime(props) {

    return (
        <Fragment>
            <div className="message-time">
                {props.messageTime}
            </div>
        </Fragment>
  );
}

export default MessageTime;
