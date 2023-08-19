import React from 'react'

import { useEffect, useReducer } from 'react'
import axios from 'axios'

//###################################################################################
//BT - Step1: Setting up the store. Again, put all of your variable into an object.
//###################################################################################

const initialState = {
    loading: true,
    errorMessage: '',
    post: {}
}

//##################################################################################
// BT - Step 2: Setting up your reducer function accept an arrow function with two params:
//      state, action.
//##################################################################################

const reducer = (state, action) => {

    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                errorMessage: '',
                post: action.payload
            }
        case 'FETCH_FAILURE':
            return{
                loading: false,
                post: {},
                errorMessage: 'Something went wrong'
            }

        default: 
            return state
    }
}



function UseEffectUseReducer() {

    //#############################################################################
    // BT - Step 3: Start using your define variable and reducer function.
    //#############################################################################

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=> {

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response.data)
            //#########################################################################
            // BT - Use dispatch() to send the receive data to set your variable.
            //#########################################################################
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            
        })
        .catch(error => {
            console.log(error)
            //###############################################################
            // BT - Use dispatch() to send the result to set your variable.
            //###############################################################
            dispatch({type: 'FETCH_FAILURE'})
        })
    // BT - Empty array to indicate I only want to run it once time which is on 'componentDidMount'
    },[])

    return (
        <div>
            { state.loading ? 'Loading' : state.post.title}
            { state.errorMessage ? state.errorMessage : null }
        </div>
    )
}

export default UseEffectUseReducer