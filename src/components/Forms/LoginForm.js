import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import axios from 'axios'


// BT - Management data using Context
import UserContext from '../Context/UserContext';
import { useContext} from 'react';

//BT - Router
import { useHistory } from 'react-router-dom';

import Alert from '@mui/material/Alert';

import { useState } from 'react';

// import useAxiosFunction from '../../hooks/useAxiosFunction';

//##################################################################################################
// BT - This is our own axios instance, this is nothing more that we create a new instance and
//      configure it with our own stuff.
//##################################################################################################
// import axios from '../../apis/axiosInstance';



const url_get_token = 'http://localhost:8000/djoser_auth/token/login/'
const url_log_in = 'http://localhost:8000/djoser_auth/users/me/'


// function Copyright(props) {

//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//         {'Copyright © '}
//         <Link color="inherit" href="https://mui.com/">
//             Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//         </Typography>
//     );
// }

// ##########################################################################################
// BT - Step 1: Initialize the theme. This is so that your template can access default theme.
//      and modify the color or other stuff in the theme.
// Note: You can modify directly by passing a {} into the createTheme() function and have any
//       valid CSS rule and then you can access it in your template along with the CSS rule in
//        theme.
//       But this guy only intialize it and get an empty () so that he can access theme
//       CSS property without modifing it.
//###########################################################################################
const theme = createTheme();

export default function SignIn() {

    //##################################################
    // BT - Data section:
    //##################################################

    const { setUser} = useContext(UserContext)

    // BT - Router
    const history = useHistory()

    const [ message, setMessage ] = useState('')


    // const [ response, error, loading, axiosFetch ] = useAxiosFunction()

    // const getLogin = (userCredential) => {

    //     axiosFetch({
    //         axiosInstance: axios,
    //         method: 'POST',
    //         url: '/token/login/',
    //         requestConfig: {
                
    //                 email: userCredential.email,
    //                 password: userCredential.password

    //         }

    //     })



    // }


    //###################################################
    // BT - Function to handle the submit button.
    //###################################################
    const handleSubmit = (event) => {

        event.preventDefault();
        // BT - Where is this FormData coming from?
        const data = new FormData(event.currentTarget);

        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });

        let userCredential = {

            email: data.get('email'),
            password: data.get('password'),

        }

        //#############################################
        // BT - Now, we need to use the our own hook.
        //#############################################

        // console.log(`BT - Before getToken`)
        // // BT - First getToken()
        // getLogin(userCredential)
        // console.log(`BT - Between getToken`)
        // console.log(`BT - After getToken`)

        


        // BT - I am going to make an API call to the server.
        //Step 1: Need to get a token.

        axios.post(url_get_token,userCredential)
        .then((response) => {
            //#############################################################################
            // BT - It will give you an entire object.
            // response.data === object with actuall data {"auth_token":"3e30aff173847e5139b559b2373a334c600e141c"}
            // response.status === number (200) <==Good for checking the HTTP status code.
            //#############################################################################
            console.log(`BT - axios post to get the token: ${response.data.auth_token}`)

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

                    localStorage.setItem('isLoggedIn',true)

                    // localStorage.setItem('user', JSON.stringify(response.data))

                    history.replace('/')

                    
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        })
        .catch((error) => {
            // ###########################################
            // BT - Always get: error.response
            //############################################
            console.log(error.response.status)

            if (error.response.status === 400){
                console.log(`BT - Wrong username or password`)
                setMessage(`Wrong username or password`)
            }

            
        })

        console.log(`BT - This is after submit button`)
        
    }//handleSubmit

    

    return (

        // BT - Step 2: You must wrap around your component with the <ThemeProvider and pass in the theme={theme}
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        {/* BT - What is CssBaseline does?  */}
            <CssBaseline />

            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            {/* BT - Step 3: Then you can access it as below. 
                Note: The sx allows you to create a style on the fly. But you can only use all of the 
                      css style only. You would not be able to access the theme like the color below,
                      unless you have done the 2 steps above.
             */}
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    { message ? <Box><Alert sx={{ }}variant="outlined" severity="error">{ message }</Alert></Box> : null }
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
            </Box>
            
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
        </ThemeProvider>
    
    );
}