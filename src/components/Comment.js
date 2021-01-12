import React, { useState } from 'react'

function Comment(props){

    const { id, user, comment } = props.comment

    const [upvotes, setUpvotes ] = useState(0)
    const [downvotes, setDownvotes ] = useState(0)

    function handleUpvoteClick(){
        setUpvotes((upvotes) => upvotes + 1)
    }

    function handleDownvoteClick(){
        setDownvotes((downvotes) => downvotes + 1)
    }

    return(
        <div data-id={id}>
            <h4>{user}</h4>
            <p>{comment}</p>
            <button id="upvotes" onClick={handleUpvoteClick}>{upvotes} 👍</button><button id="downvotes" onClick={handleDownvoteClick}>{downvotes}👎</button>
            <br/>
            <button onClick={props.handleDeleteComment}>Delete Comment</button>
        </div>
    )
}

export default Comment;