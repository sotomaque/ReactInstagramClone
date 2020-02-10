import React from 'react';

import Header from './components/Header';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
    const [user, setUser] = React.useState('e');
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        document.title = user ? `${user}'s Feed` : "Please Login"
    }, [user])

    if (!user) {
        return <Login setUser={setUser} />
    }

    return (
        <>
            <Header user={user} setUser={setUser} />
            <CreatePost user={user} posts={posts} setPosts={setPosts} />
            <PostList user={user} posts={posts} />
        </>
    );
}

export default App; 