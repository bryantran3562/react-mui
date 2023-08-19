
import { useState } from 'react'

// ##########################################################################################################
// BT - Now we factor our Counter.js to useHook or another word. Separate them out into a separate file for
//      reused.
//      React called them hooks. You must have in your file name: useXXX.js format.
//###########################################################################################################


//###########################################################################################################
// BT - IMPLEMENT: So, then we can just make all the API calls back to our Python Rest API server call here.
//###########################################################################################################

function useCounter2Hook() {

    // BT - As usual, define all of your varibles and setXXX() function in your custom hook js file.
    const [count, setCount] = useState(0)

    const setMyCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    //BT - Then you need to return them so that other component can use them directly in their Function or Template.
    
    return [count, setMyCount]

    // useEffect(() => {

    //     //########################################################
    //     //BT - You just use it in your script directly.
    //     //########################################################
    //     document.title = `You clicked: ${count}`
    // })

    // BT - We don't use JSX so commented them out.
    // return (
    //     <div>useCounter</div>
    // )
}

export default useCounter2Hook