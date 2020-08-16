// React
import React, {Fragment} from 'react';

// Components
import ChatContainer from './Chat/ChatContainer';
import Auth from './Chat/Auth/Auth';


function App() {

    return (
        <Fragment>
            {localStorage.getItem('isAuth') ? <ChatContainer /> : <Auth />}
        </Fragment>
    )
}

export default App;
