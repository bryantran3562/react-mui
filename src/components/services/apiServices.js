// import React from 'react'

import axios from 'axios'

const url_get_token = 'http://localhost:8000/djoser_auth/token/login/'

const url_log_in = 'http://localhost:8000/djoser_auth/users/me/'

const url_log_out = 'http://localhost:8000/djoser_auth/token/logout/'

const url_sign_up = 'http://localhost:8000/djoser_auth/users/'

const url_user_activation = 'http://localhost:8000/djoser_auth/users/activation/'

const url_reset_password = 'http://localhost:8000/djoser_auth/users/reset_password/'

const url_reset_password_confirm = 'http://localhost:8000/djoser_auth/users/reset_password_confirm/'



export default {

    // ####################################################################################################
    // BT - Always remember, async will return a promise object and you must do the .then().catch()
    //      .then() is a call back function with the promise object resolved successfully.
    //      .catch() is a call back function with the promise object resolved to a failure.
    //      It will call one these functions for you.
    // ####################################################################################################
    async getToken(userCredential){

        // BT - The await function is also return a promise object.
        const res = await axios.post(url_get_token,userCredential)
        return res
    },
    async logIn(){
        console.log("BT - Token key from the localStorage: " + localStorage.getItem('token'))
        const res = await axios.get(url_log_in,{ headers: {
            Authorization: 'Token ' + localStorage.getItem('token')
        }
    })
        return res
    },
    async logOut(){
        console.log("BT - Token key from the localStorage: " + localStorage.getItem('token'))
        const res = await axios.post(url_log_out,{
            
            token: localStorage.getItem('token')
        },
        { headers: {

            Authorization: 'Token ' + localStorage.getItem('token')
        }
    })
        return res
    },

    async signUp(userData){
        
        const res = await axios.post(url_sign_up,userData)
        return res
    },

    async userActivation(activationData){
        
        const res = await axios.post(url_user_activation,activationData)
        return res
    },

    async resetPassword(email){
        
        const res = await axios.post(url_reset_password,email)
        return res
    },

    async resetPasswordConfirm(activationData){
        
        const res = await axios.post(url_reset_password_confirm,activationData)
        return res
    }

    // return (
    //     <div>apiServices</div>
    // )
}

// export default apiServices