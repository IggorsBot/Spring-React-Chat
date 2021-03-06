// React
import React, { Fragment, useState } from 'react';

// Third-Party
import { sendMessageService } from 'services/ChatService'


function ChatForm() {

    const[message, setMessage] = useState('')

    const save = () => {
        sendMessageService({contect: message})
        setMessage("")
    }

    const onChange = event => setMessage(event.target.value)

    const onKeyPress = event => {
        if (event.key === 'Enter') {
            save()
        }
    }

    return (
        <Fragment>
            <div id="chat-form">
                <img src="images/icons/attachment-logo.svg" alt="Add Attachment" />
                <input type="text"
                       placeholder="type a message"
                       value={message}
                       onChange={onChange}
                       onKeyPress={onKeyPress}/>
            </div>
        </Fragment>
    );
}

export default ChatForm;
