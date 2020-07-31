import React, {Fragment} from 'react';


function ConversationDate(props) {

    return (
        <Fragment>
            <div class="created-date">
                {props.date}
            </div>
        </Fragment>
    );
}

export default ConversationDate;
