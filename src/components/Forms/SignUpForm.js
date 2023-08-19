import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

import { useState } from 'react';

import axios from 'axios'

const url_sign_up = 'http://localhost:8000/djoser_auth/users/'



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

// const drawerWidth = 240;

export default function SignUpForm() {

    const [ message, setMessage ] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault();
        // BT - Where is this FormData coming from?
        const data = new FormData(event.currentTarget);

        console.log({
        first_name: data.get('first'),
        last_name: data.get('last'),
        email: data.get('email'),
        password: data.get('password'),
        });

        let userData = {
            first_name: data.get('first'),
            last_name: data.get('last'),
            email: data.get('email'),
            password: data.get('password'),
        }

        axios.post(url_sign_up,userData).then((res) => {

            if (res.status === 201){
                console.log(`BT - SignUp.js - Signup success: ${userData.email}`)
                setMessage(`Please, log into your Email account: ${userData.email} and activate your account.`)
          }

      })
      .catch((err) => {
            //BT - This is where you get an error. Promise object rejected.
            // 'User with this email address already exists.'
            console.log(`BT - SignUpForm.js - catch(err): ${err.response}`)
            setMessage(`${err.response}`)
      })

        
        
    };

    return (

        
        // BT - Step 2: You must wrap around your component with the <ThemeProvider and pass in the theme={theme}
        <ThemeProvider theme={theme}>

        <Container component="main" maxWidth="xs">
        <CssBaseline />

        { message && <Box sx={{marginTop: 20,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
                <Box component="form" >
                <Alert sx={{ width: '700px'}}variant="outlined" severity="success">{ message }</Alert>
                </Box>               
                </Box>}

        { !message && (
         
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="first"
                    label="First Name"
                    name="first"
                    autoComplete="first"
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="last"
                    label="Last Name"
                    name="last"
                    autoComplete="last"
                    autoFocus
                    />
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
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign Up
                    </Button>

                </Box>
            </Box>
         )}
        </Container>
        </ThemeProvider>
    );
}