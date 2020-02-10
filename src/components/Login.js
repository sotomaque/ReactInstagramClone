import React from 'react';

function Login({ setUser }) {
    const [username, setUsername] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // send username up to the app component
        // aka lift out state up
        setUser(username);
    }
    
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="enter a username"
                    onChange={event => setUsername(event.target.value)}
                />
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default Login; 