import React, { useState } from 'react'
import Comment from "./Comment.js"
import CommentSearch from "./CommentSearch.js"

const CommentList = (props) => {

    const [ commentList, setCommentList ] = useState(props.comments)
    const [ searchTerm, setSearchTerm ] = useState("")

    const handleSearchSubmit = (searchTerm) => {
        setSearchTerm(searchTerm)
    }

    const handleDeleteComment = (id) => {
        const newComments = commentList.filter(eachComment => eachComment.id !== id)
        setCommentList(newComments)
    }

    const videoComments = commentList
        .filter((eachComment) => eachComment.user.match(searchTerm))
        .map((eachComment, index) => {
        return (
          <Comment key={index} comment={eachComment} handleDeleteComment={handleDeleteComment}/>
        )
      })
      return(
          <div>

              <CommentSearch onSearchSubmit={handleSearchSubmit}/>
              <h3>{videoComments.length} Comments</h3>
              {videoComments}
          </div>
          )
}

export default CommentList;
