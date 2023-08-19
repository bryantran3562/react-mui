import React from 'react'
import { useState } from 'react'

function UseState() {

    // BT - Step 1: Destructure from the useState hook and also initialize your count variable to 0.
    //              useState() return:
    //a. variable at your choice.
    //b. a setXXX() function so that you can use it to update your variable.

    const [count, setCount] = useState(0)

    const increment = () => {
        // ###########################################################################################################
        // BT - You must pass in an arrow function to setCount () to do the updating. Otherwise, it will not
        //      work properly. This is call previous state.
        //############################################################################################################
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div> 
            <div>
            UseState
            </div>
            <div>
                <button onClick={increment}>Count { count }</button>
            </div>
        </div>
    )
}

export default UseState