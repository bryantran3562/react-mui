import React, { useEffect } from 'react'
import { useState } from 'react'

function UseEffectHook() {

    const [count, setCount] = useState(0)

    // BT - Set name = ''
    const [name, setName] = useState('')
    
    // ##################################################################################
    // BT - The useEffect will run after every render.
    // 1. The idea is that - When we useState() we are actually try to mimic to have a
    //    state like the class. 
    // 2. And useEffect is trying to minic - The life cycle hook with - 'ComponentDidMount' and
    //    'componentDidUpdate' of the class. That is it will call the 'componentDidMount' on
    //    the first time the component is created and then it will call 'componentDidUpdate'
    //    each time there is a changes in the UI.
    //    However, sometimes, we only want to run the useEffect() only when a certain event
    //    or variable that change, we then run the function.
    //    So, in order to do this, we will need to set up an array and put in the props or
    //    variable that we want to watch for and each time, the variable changes, we can
    //    then run it.
    //3.  If we only put an empty [], then we mimic the 'componentDidMount' which is only
    //    run once when the component is first created.
    //###################################################################################

    useEffect(() => {
        console.log(`Updating the useEffect`)
        document.title = `You have clicked ${count}`

        //BT - 4. To minic a 'componentWillUnmount() life cycle' do the return statement below
        //        pass in an arrow function and the remove or do your clean up here.

        return () => {
            //BT - Put your clean up code here.
        }

    },[count])

    const handleOnClickButton = () => {
        setCount(count + 1)
    }

    return (

        <div>
            {/* BT - The effect here is that - if you don't set the useEffect() function with an array to watch
                     your variable, then the useEffect will run every time a user is typing into the input
                     HTML element. This is because, the useEffect() will run every time the UI changes or input
                     type is changes. So, we need to stop that and it should only run when the click button is 
                     clicked. */}
            <input type="text" value={name} onChange={ e => setName(e.target.value)} />
            <button onClick={handleOnClickButton}>Click Me { count }</button>
        </div>
    )
}

export default UseEffectHook