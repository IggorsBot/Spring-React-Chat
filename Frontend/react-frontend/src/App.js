// React
import React, {Fragment} from 'react';

// Third-Party
import {connect} from './util/ws';

// Components
import ChatContainer from './Chat/ChatContainer';


function App() {
    return (
        <Fragment>
            <ChatContainer />
        </Fragment>
    );
}

export default App;
