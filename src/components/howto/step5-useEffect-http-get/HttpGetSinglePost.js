import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'

function HttpGetSinglePost() {

    // BT - Step 1: Set up your variable.

    const [Post, setPost] = useState({})

    const [id, setId] = useState(1)

    //BT - Set up to fetch data on Mounted life cycle hook.

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            console.log(response.data)
            setPost(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[id])

    const response_data = JSON.stringify(Post)

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            
            <p>{ response_data }</p>
            
        </div>
    )
}

export default HttpGetSinglePost