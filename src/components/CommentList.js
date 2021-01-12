import React, { useState } from 'react'
import Comment from "./Comment.js"

function CommentList(props){

    const [ commentList, setCommentList ] = useState(props.comments)
    const [ searchComments, setSearchComments ] = useState(props.comments)
    const [ searchTerm, setSearchTerm ] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        const newComments = commentList.filter(eachComment => eachComment.user.match(searchTerm))
        setSearchComments(newComments)
    }

    function handleChange(event){
        setSearchTerm(event.target.value)
    }

    function handleDeleteComment(event){
        const id = parseInt(event.target.parentElement.dataset.id)
        const newComments = commentList.filter(eachComment => eachComment.id !== id)
        setCommentList(newComments)
        setSearchComments(newComments)
    }

    const videoComments = searchComments.map((eachComment) => {
        return (
          <Comment comment={eachComment} handleDeleteComment={handleDeleteComment}/>
        )
      })
      return(
          <div>
              <form onSubmit={handleSubmit}>
                  <input type="text" id="search-term" onChange={handleChange} value={searchTerm}/>
                  <br/>
                  <input type="submit" value="Search by Username"/>
              </form>
              <h3>{commentList.length} Comments</h3>
              {videoComments}
          </div>
          )
}

export default CommentList;
