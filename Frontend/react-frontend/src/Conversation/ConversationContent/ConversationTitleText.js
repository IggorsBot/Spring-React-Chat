// React
import React, {Fragment} from 'react';


function ConversationTitleText(props) {

    return (
        <Fragment>
            <div className="title-text">
                {props.text}
            </div>
        </Fragment>
    );
}

export default ConversationTitleText;
