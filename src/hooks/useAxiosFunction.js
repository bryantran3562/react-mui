import { useState, useEffect } from 'react'

// ################################################
// BT - Type: rafce - to get the code snippet.
//#################################################


//##########################################################################################
// BT - This useAxiosFunction is a custom hook, and it will allow to return the data and
//      function back to the Component that used it.
//      With this setup, you can pass in POST, GET, PUT, DELETE method to use this hook.
//##########################################################################################

const useAxiosFunction = () => {

    // BT - Setting up our state so that React can update our GUI.

    const [response, setResponse] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [controller, setController] = useState()


    //#################################################################################
    // BT - This is the function that we will return and for use in other components.
    //#################################################################################

    const axiosFetch = async (configObj) => {

        // BT - We just destructure the incoming passed in object.
        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj

        try{
            setLoading(true)
            const ctrl = new AbortController()
            setController(ctrl)
            const res = await axiosInstance[method.toLowerCase()](url,{
                ...requestConfig,
                // ##############################################################################
                // BT - We have to attach the signal property with controller.signal so that
                //      we can cancel our operation.
                //###############################################################################
                signal: ctrl.signal
            })

            console.log(`BT - useAxiosFunction.js - ${JSON.stringify(res)}`)
            setResponse(res)
            

        }
        catch (err) {
            console.log(err.messages)
            setError(err.messages)
        }
        finally{
            // BT - Whether we are getting or responses or error, we will have to stop the loading(false)
            setLoading(false)
        }
    }


    useEffect(() => {

        console.log(`BT - useAxiosFunction.js - useEffect() called...`)

        //#############################################################################################################
        // BT - useEffect clean up function to prevent memory leak by cancel our operation when the component is
        //      unMounted state.
        //#############################################################################################################
        return () => controller && controller.abort()

    //####################################################################################################################
    // BT - We will have to pass in the controller, so that this useEffect() will get call when there is a cancellation
    //      from the controller?
    //####################################################################################################################
    },[controller])




    // BT - We want to return all of our states, so that we can use it and React can update our GUI.
    return [response, error, loading, axiosFetch]

}

export default useAxiosFunction
