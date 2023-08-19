import React, { useEffect } from 'react'
import { Box } from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Alert from '@mui/material/Alert';

//BT - Router
import { useParams } from 'react-router-dom';

import axios from 'axios'
import { useState } from 'react';

const url_user_activation = 'http://localhost:8000/djoser_auth/users/activation/'

// const drawerWidth = 240;

function UserActivation() {

    const [ message, setMessage ] = useState('')

    // BT - Router
    // const history = useHistory()

    //BT - Router params

    const { uid, token } = useParams()


    useEffect(() => {

        const activationData = {
            uid: uid,
            token: token
        }

        console.log(`BT - UserActivation.js - params: ${ uid } - token: ${token}`)

        axios.post(url_user_activation,activationData)
        .then((response) => {
            
                console.log(`BT - UserActivation is success: ${response.data}`)
                setMessage("You account has been activated. Please, login.")

            
        })
        .catch((err) => {
            console.log(`BT - UserActivation - catch(err): ${err.response}`)
        })

    },[token, uid])

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box sx={{marginTop: 20,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
                <Box component="form" >
                <Alert sx={{ width: '450px'}}variant="outlined" severity="success">{ message }</Alert>
                </Box>               
                </Box>

        </Container>
    )
}

export default UserActivation