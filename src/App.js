import React from 'react';

import Login from './components/Login';

function App() {
    let user = "";

    if (!user) {
        return <Login />
    }

    return <div>App</div>
}

export default App; 