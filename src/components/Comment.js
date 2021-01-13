import React, { useState } from 'react'

const Comment = (props) => {

    const { id, user, comment } = props.comment

    const [upvotes, setUpvotes ] = useState(0)
    const [downvotes, setDownvotes ] = useState(0)

    const handleUpvoteClick = () => {
        setUpvotes((upvotes) => upvotes + 1)
    }

    const handleDownvoteClick = () => {
        setDownvotes((downvotes) => downvotes + 1)
    }

    return(
        <div>
            <h4>{user}</h4>
            <p>{comment}</p>
            <button id="upvotes" onClick={handleUpvoteClick}>{upvotes} 👍</button><button id="downvotes" onClick={handleDownvoteClick}>{downvotes}👎</button>
            <br/>
            <button onClick={() => props.handleDeleteComment(id)}>Delete Comment</button>
        </div>
    )
}

export default Comment;