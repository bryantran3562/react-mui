import React from 'react'

import { useReducer } from 'react'

const initialState = 0

const reducer = (currentState, action) => {

    console.log(currentState)

    switch(action.type){
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }

}

function PracticeReducer() {

    //######################################################################################
    // BT - It looks like the react will get the initialState from the user, and then
    //      it will keep track of this variable. So, then when you call them with the 
    //      dispatch(), it will give you the current state of your variable and then 
    //      you modify it, then it will update the variable and allow you to use it in
    //      the template or from the return.
    //######################################################################################
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            Count: <p>{ count }</p>
            {/* BT - Each time, you want to update your data, you will have to call dispatch to update 
                     your data
             */}
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() =>dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() =>dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default PracticeReducer