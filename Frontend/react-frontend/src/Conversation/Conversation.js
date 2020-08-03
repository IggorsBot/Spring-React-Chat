// React
import React, {Fragment} from 'react';

// Components
import ConversationDate from './ConversationContent/ConversationDate';
import ConversationMessage from './ConversationContent/ConversationMessage';
import ConversationTitleText from './ConversationContent/ConversationTitleText';


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
