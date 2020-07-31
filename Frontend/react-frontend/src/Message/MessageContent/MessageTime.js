import React, {Fragment} from 'react';


function MessageTime(props) {

  return (
      <Fragment>
        <div class="message-time">
            {props.messageTime}
        </div>
      </Fragment>
  );
}

export default MessageTime;
