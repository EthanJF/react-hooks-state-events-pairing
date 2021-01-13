import React, { useState } from 'react'

const CommentSearch = ({onSearchSubmit}) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearchSubmit(searchTerm)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="search-term" onChange={handleChange} value={searchTerm}/>
            <br/>
            <input type="submit" value="Search by Username"/>
        </form>
    )
} 

export default CommentSearch;


