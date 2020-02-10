import React from 'react';

function PostList({posts, user}) {
    return (
       posts.map( (post, index) => (
            <React.Fragment key={index}>  
                {post.image && (
                    <img 
                        src={URL.createObjectURL(post.image)}
                        style={{height: 100, width: 200, objectFit: 'conver'}}
                        alt="Post Cover"
                    />      
                )}
                <p>{post.content}</p>
                <div>{user}</div>
            </React.Fragment>
        ))
    )
}

export default PostList; 