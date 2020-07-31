import React, {Fragment} from 'react';


function MessageText(props) {


  return (
      <Fragment>
        <div class="message-text">
            {props.messageText}
        </div>
      </Fragment>
  );
}

export default MessageText;
