import video from "../data/video.js";
import CommentList from "./CommentList.js"
import React, { useState } from 'react'

const App = () => {
  console.log("Here's your data:", video);

  const { title, embedUrl, views, createdAt, upvotes, downvotes, comments } = video

  const [ likes, setLikes ] = useState(upvotes)
  const [ dislikes, setDislikes ] = useState(downvotes)

  const handleLikeClick = () => {
    setLikes((likes) => likes + 1)
  }

  const handleDislikeClick = () => {
    setDislikes((dislikes) => dislikes + 1)
  } 

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <button onClick={handleLikeClick}>{likes} 👍</button><button onClick={handleDislikeClick}>{dislikes}👎</button>
      <hr/>
      <CommentList comments={comments}/>
    </div>
  );
}

export default App;
