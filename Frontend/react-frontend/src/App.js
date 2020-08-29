// React
import React, {Fragment} from 'react';

// Components
import ChatContainer from 'components/ChatContainer';
import Authentication from 'components/authentication/Authentication';


function App() {

    return (
        <Fragment>
            {localStorage.getItem('isAuth') ? <ChatContainer /> : <Authentication />}
        </Fragment>
    )
}

export default App;
