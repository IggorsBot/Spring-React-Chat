// React
import React, {Fragment} from 'react';

// Third-Party
import {connect} from './Chat/util/ws';

// Components
import ChatContainer from './Chat/ChatContainer';
import Auth from './Chat/Auth/Auth';


// function App() {
//
//     connect()
//     return (
//         <Fragment>
//             <ChatContainer />
//
//         </Fragment>
//     );
// }
//
function App() {
    connect()
    return (
        <Fragment>
            <Auth />
        </Fragment>
    )
}

export default App;
