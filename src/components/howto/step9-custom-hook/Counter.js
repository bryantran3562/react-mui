import React from 'react'


// BT - Make sure you remember to include the 'useState' from react.
import { useState } from 'react'
import useCounter from './useCounter'


//##############################################################################################################################
// SUMMARY: a. The ideal is that - you provide two things to the useState() function. 
//             your variable with initial value and with a setXXX().
//             The setXXX() is your own logic, what you want to do with your variable in your setXXX() function.
//             The React will then do it for you when you call your function in your code, and React will update all of your 
//             variable in your file automatically.
//          b. You can then use your variable direct anywhere in your file include both in the Function() and the template.
// Note: There are different way to do your own custom hook. This is the first method where your variable and your initial
//       value is declared in your component where you also have the HTML template to your variable.
//       You move the useEffect() function to a useCounterHook.js and then you pass the variable to this function from
//       here to anther useCountHook.js
//       The second technique is that - You move all the variable and the useState() function to the other useCounter2Hook.js
//       and then return all the value needed so that you can use it in another component with HTML template so that you can
//       display them in the HTML.
//       This is similar to Vue3 where you have all of your LoginForm in one file and on - Mounted() you would call the 
//       pinia store or useUserStore where it has all the variable and function that will make an axios call to the API server
//       to get the token/login credential...etc. and then you can just get it from the store and update your HTML or loginForm.
//       
//###############################################################################################################################

function Counter() {

    //##################################################################################################
    // BT - The reason is that - we need to have variable where we can store the value of our counter
    //      and modify it later. And this value is also manage by the React internally. 
    //      We can not modify it directly but instead we have to modify it using the setXXX() function.
    //###################################################################################################


    //####################################################
    // BT - You must give it an initial value.
    //####################################################

    //##########################################################################################################
    //BT - IMPLEMENT: So, maybe, define all of your login form here with all the variables init to useState().
    //     Then on the useUserLogin.js define all the axios calls to get the token and login from our
    //     Python API server.
    //##########################################################################################################
    const [count, setCount] = useState(0)


    //#################################################################################################################
    // BT - useEffect - is nothing more that - this is onMounted or Mounted life cycle hook, that will automatically
    //                  get call on the first time and thereafter each time, there is a change in the page.
    //#################################################################################################################

    // useEffect(() => {

    //     //########################################################
    //     //BT - You just use it in your script directly.
    //     //########################################################
    //     document.title = `You clicked: ${count}`
    // })


    //################################################################################################################
    // BT - Call our own custom hook and pass in our variable directly. Nothing to think about.
    //      - Declare your variable.
    //      - Pass to useState() and let them worry about how to update it everywhere you have your variable listed
    //        in your file or template.
    //################################################################################################################
    useCounter(count)


    return (
        <div>
            {/* BT - So, now we can just use it in our template. That is all. */}
            Count: { count }
            {/* BT - To change our count value, we just juse our setCountXXX() function above. 
                     The function is also provide the prevXXX for us to access it.
                     You could use: setCount(count + 1) <==This is not safe.
            */}
            <button onClick={() => setCount(prevCount =>  prevCount + 1)}>Click Me</button>
        </div>
    )
}

export default Counter