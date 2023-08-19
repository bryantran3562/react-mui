import React from 'react'
import { useState } from 'react'



function PracticeState() {

    // BT - Primitive type.
    // const [count, setCount] = useState(0)

    // const handleOnClickedButton = () => {

    //     console.log(`BT - Clicked Button...`)
    //     setCount(count + 1)

    // }

    // BT - How to deal with array.
    const [posts, setPost] = useState([])
    const [text, setText] = useState('')

    const handleOnChangeInputType = (e) => {
            //########################################################################################################
            // BT - So when you do the setText(e.target.value), it will take the value that you are
            //      currently tying update the varirable 'text' and update in the template where it found: { text }
            //########################################################################################################
            setText(e.target.value)
    }


    const handleOnClickedButtonAdd = (e) => {

        setPost([
            //BT - The spread operator tells: keep the current array and just append new string at the end.
            ...posts,
            // BT - Think of this as you are adding the string manually.
            //Note: Since, you are going to display the array in your template using 'map' function and it required
            //      to have a unique key. To resolve this issue, you are going to add the new item as an object rather
            //      a single text string. This is so that you can add your own id field in to resolve the key unique issue.
            //text
            {
                id: posts.length,
                text: text
            }
        ])
        
    }

    console.log(posts)

    return (
        <div>
            {/* <p>Current count is: { count } </p>
            <button onClick={handleOnClickedButton}>Add { count }</button>
            { text } */}
            <input type="text" value={text} onChange={handleOnChangeInputType}/>
            <button onClick={handleOnClickedButtonAdd}>Add</button>
            <div>{ posts.map((post) => <h4 key={post.id}>{ post.text }</h4>) }</div>
        </div>
    )
}

export default PracticeState