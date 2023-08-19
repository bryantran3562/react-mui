import React from 'react'
import { useState } from 'react'

function ArrayStateHook() {

    // BT - Initialize your array to an empty array.
    const [items, setItem] = useState([])

    const handleOnClickedButton = (e) => {
        setItem([
            // BT - Keep all the current item in the array of items and only add or append new item at the end of the array.
            ...items,
            { id: items.length,
              value: items.length
            }
        ])
    }

    return (
        <div>
            <button onClick={handleOnClickedButton}>Click Me</button>
            {/* BT - map is a for each item in items do.... */}
            {/* BT - You must remember: all the stuff in javascript must be in {} */}
            {
                items.map((item) => <h3 key={ item.id }> {item.value } </h3>)
            }
        </div>
    )
}

export default ArrayStateHook