import React, {Fragment} from 'react';

function ConversationTitleText(props) {
    return (
        <Fragment>
            <div class="title-text">
                {props.text}
            </div>
        </Fragment>
    );
}

export default ConversationTitleText;
