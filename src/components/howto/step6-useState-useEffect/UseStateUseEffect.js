import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'

function UseStateUseEffect() {

    //#####################################################################################
    //BT - Setting up the state:
    //     =====================
    //     post: received the post data.
    //     setPost: use this to set the variable post when we received it via axios call.
    //#####################################################################################



    //############################################################################################################
    // BT - Basic idea is that - You just need to setup your variable with useState(), then this useState()
    //      will automatically give you a setXXX() so that you can use it to set your variable to reflect
    //      your variable current state. Hence, called useState.
    //      After that, you can just use your variable to get the data and then when you need to change your
    //      variable value, you then use setXXX() function. Simple as that.
    //      Note: You should only use this useState as a local state management and with primative type.
    //            Use useReducer for object and global state management. This is similar to pinia store
    //            Any components deep nested can access the data at a central site every easily instead of
    //            using props to pass the data down to children.
    //############################################################################################################
    const [post, setPost] = useState({})

    //BT - Same as above. Use 'setLoading' to set the 'loading' variable
    const [loading, setLoading] = useState(true)

    // BT - use 'SetErrorMessage' to set the 'errorMessage' variable.
    const [errorMessage, setErrorMessage] = useState('')


    //################################################################################################################
    //BT - The useEffect() is nothing more that - this is mimic the life cycle hook, with an empty array as 
    //     a second param to the useEffect() will mimic 'componentDidMount' in which similar to Created or Mounted
    //     life cycle hook in Vue.
    //################################################################################################################
    useEffect(()=> {

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response.data)
            setLoading(false)
            setPost(response.data)
            
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
            setPost({})
            setErrorMessage('Something went wrong')
        })
    // BT - Empty array to indicate I only want to run it once time which is on 'componentDidMount'
    },[])

    return (
        <div>
            {
                // BT - Want to display the loading and data if everthing is ok.
                loading ? 'Loading' : post.title
            }
            {
                errorMessage ? errorMessage : null
            }
        </div>
    )
}

export default UseStateUseEffect