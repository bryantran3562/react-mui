import React from 'react'

import { useState } from 'react'

import { Stack, TextField } from '@mui/material'

import InputAdornment from '@mui/material/InputAdornment'

// BT - eyeIcon for turn on/off to reveal the typing password.

// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

function MuiTextField() {

    const [data, setData] = useState('')

    return (
        <Stack>

            <Stack direction="row" spacing={2}>
                <TextField
                label="name"
                variant='outlined'>
                </TextField>
                <TextField
                label="name"
                variant='filled'>
                </TextField>
                <TextField
                label="name"
                variant='standard'>
                </TextField>
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField
                label="small secondary"
                size="small"
                color="secondary"
                required
                helperText="Please, enter your name"
                >
                </TextField>
                <TextField
                label="Enter your password"
                type="password"
                >
                </TextField>
                <TextField
                label="name"
                InputProps={{readOnly: true}}
                >
                </TextField>
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField
                label="Amount"
                InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}           
                >
                </TextField>
                <TextField
                label="Weight"
                InputProps={{endAdornment: <InputAdornment position='end'>kg</InputAdornment>}}   
                >
                </TextField>
                <TextField
                 label="name"
                 value={data}
                //###########################################################################################################
                //  BT - onChange will executed when there is a change or when a user is typing into your text field.
                //       the onChange will pass into your function with 'e' object where you can access the
                //       the value on change: e.target.value. You then use this value to set your variable 'data'.
                //       Then react will take care all of your 'data' variable in your HTML template and even in your
                //       function above.
                //###########################################################################################################
                 onChange={ (e) => setData(e.target.value) }
                 error={!data}
                 helperText={!data ? 'Required' : "You must type in your text"}
                >
                </TextField>
            </Stack>
            { data }
        </Stack>
    )
}

export default MuiTextField