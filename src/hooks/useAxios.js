import { useState, useEffect } from 'react'

// ################################################
// BT - Type: rafce - to get the code snippet.
//#################################################


//##########################################################################################
// BT - This useAxios will received an argument configObj from the Component that used it.
//##########################################################################################

const useAxios = (configObj) => {

    // BT - We just destructure the incoming passed in object.
    const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configObj


    // BT - Setting up our state so that React can update our GUI.

    const [response, setResponse] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        //##################################################################
        // BT - This will allow to cancel our axios operation. To prevent
        //      memory leak.
        //##################################################################

        const controller = new AbortController()

        // BT - Setting up async function

        const fetchData = async () => {

            try{

                const res = await axiosInstance[method.toLowerCase()](url,{
                    ...requestConfig,
                    // ##############################################################################
                    // BT - We have to attach the signal property with controller.signal so that
                    //      we can cancel our operation.
                    //###############################################################################
                    signal: controller.signal
                })

                console.log(res)
                setResponse(res.data)
                

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


        // BT - So, now we have to call our defined function above.

        fetchData()

        //#############################################################################################################
        // BT - useEffect clean up function to prevent memory leak by cancel our operation when the component is
        //      unMounted state.
        //#############################################################################################################
        return () => controller.abort()
        //eslint-
    },[])




    // BT - We want to return all of our states, so that we can use it and React can update our GUI.
    return [response, error, loading]

}

export default useAxios