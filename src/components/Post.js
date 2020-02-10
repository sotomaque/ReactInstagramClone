import React from 'react';
import { UserContext, PostContext } from '../App';

function Post({ image, content, user, id }) {
    const currentUser = React.useContext(UserContext);
    const { dispatch } = React.useContext(PostContext);
    const isCurrentUser = currentUser === user;
    
    function handleDeletePost() {
        dispatch({ type: "DELETE_POST", payload: { id }})
    }

    return (
        <>  
            {image && (
                <img 
                    src={URL.createObjectURL(image)}
                    style={{height: 100, width: 200, objectFit: 'conver'}}
                    alt="Post Cover"
                />      
            )}
            <p>{content}</p>
            <div style={{ color: currentUser === user && 'gray' }}>{user}</div> 
            <div>{isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}</div>
            
        </>
    ) 
}

export default Post; 