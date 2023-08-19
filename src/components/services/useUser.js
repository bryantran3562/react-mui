import React from 'react'


//############################################################################################
// BT - The idea is that:
//a. Create an outer function.
//b. Then inside create an inner function, then return it so that other file can use it.
//c. The issue now is that - how do you make the data available to the component.
//   You can export the 'login' function. But
//############################################################################################

function useUser(){

    const login = (userCredential) => {

        // BT - I am going to make an API call to the server.
        //Step 1: Need to get a token.

        axios.post(url_get_token,userCredential)
        .then((response) => {
            //#############################################################################
            // BT - It will give you an entire object.
            // response.data === object with actuall data {"auth_token":"3e30aff173847e5139b559b2373a334c600e141c"}
            // response.status === number (200) <==Good for checking the HTTP status code.
            //#############################################################################
            console.log(response.data.auth_token)

            localStorage.setItem('token', response.data.auth_token)

            let header = { headers: {
                Authorization: 'Token ' + response.data.auth_token
                }
            }            

            if (response.status === 200){

                axios.get(url_log_in,header)
                .then((response) => {

                    //###########################################################################################################
                    // BT - response.data == {"first_name":"Bryan","last_name":"Tran","id":2,"email":"trongtran3562@gmail.com"}
                    //###########################################################################################################
                    console.log(`BT - Access the API endpoint user/ using the token: ${response.data.first_name}`)

                    setUser(response.data)

                    console.log(`BT - UserContext.js - user: ${response.data}`)

                    //####################################################################################################
                    // BT - The issue here is that - the Context API is supposedly to allow us to have a central data.
                    //      Then whenever a component need it. It can just access it. But if you refresh the page, then
                    //      all the data will be lost. 
                    //      This is why we must write to the localStorage so that we can get our data when the page is
                    //      refresh. 
                    //      Did try to use the 'useEffect' hook to fetch the data again to update our Context. But did 
                    //      not seem to work. Need to find out more.
                    //#####################################################################################################

                    localStorage.setItem('isLogged',true)

                    localStorage.setItem('user', JSON.stringify(response.data))

                    history.replace('/')

                    
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })

    }//login

    return [ login ]

}

export default useUser