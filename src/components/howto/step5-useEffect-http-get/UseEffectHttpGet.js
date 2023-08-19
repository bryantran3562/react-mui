import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

//################################################################################################################
//BT - The idea of the useState() is how to setup your variable and how to set it.
//     The idea of the useEffect() is how to fetch data on the 'componentDidMount' like class life cycle hooks.
//################################################################################################################

function UseEffectHttpGet() {

    //BT - Step 1: Setup your variable using useState()
    //Posts: an empty array of objects.
    //setPost: is a function that you will use to set the Posts array of the objects.

    const [Posts, setPost] = useState([])

    //###################################################################################
    //BT - useEffect() to setup 'componentDidMount' or similar to Vue - Mounted hook.
    //Note: it accepted a function.
    //###################################################################################

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // console.log(response.data)
            setPost(response.data)
        })
        .catch((error) => {
            console.log(error)
        })

    },[])

    return (
        <div>
            {
                Posts.map((post) => <p key={post.id}>{ post.title } </p>)
            }
            
        </div>
    )
}

export default UseEffectHttpGet