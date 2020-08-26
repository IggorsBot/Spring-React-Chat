// React
import React, {Fragment} from 'react';

// Components
import ConversationDate from 'components/conversation/conversationContent/ConversationDate';
import ConversationMessage from 'components/conversation/conversationContent/ConversationMessage';
import ConversationTitleText from 'components/conversation/conversationContent/ConversationTitleText';


function Conversation(props) {

    return (
        <Fragment>
            <div className={props.isActive ? "conversation active" : "conversation"}>
            <img src="images/profiles/daryl.png" alt="Daryl Duckmanton"/>

            <ConversationTitleText text={"Daryl Duckmanton"}/>
            <ConversationDate date={"Apr 16"}/>
            <ConversationMessage message={"This is a message"}/>

            </div>
        </Fragment>
    );
}

export default Conversation;
