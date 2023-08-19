import React from 'react'

import { useReducer } from 'react'

const initialState = {
    firstCounter: 0
}

// BT - You can also passing in an additional item (any name) and then access it via: action.xxxx
const reducer = (currentState, action) => {

    switch(action.type){
        case 'increment':
            return { firstCounter: currentState.firstCounter + action.value}
        case 'decrement':
            return { firstCounter: currentState.firstCounter - action.value}
        case 'reset':
            return initialState
        default:
            return currentState
    }

}

function PracticeReducerObject() {

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
            {/* BT - To use it in your tempate, you just use them directly. The useReducer will return you
                      a variable to represent your data as an object, and a dispatch function for you to
                      call to update your data
            */}
            Count: <div>{ count.firstCounter }</div>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment</button>
            <button onClick={() =>dispatch({type: 'decrement', value: 5})}>Decrement</button>
            <button onClick={() =>dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default PracticeReducerObject