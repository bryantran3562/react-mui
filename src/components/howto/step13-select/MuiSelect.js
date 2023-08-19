import React from 'react'

import { Box, TextField, MenuItem } from '@mui/material'

import { useState } from 'react'

function MuiSelect() {

    //BT - Single value select
    const [country, setCountry] = useState('')

    //BT - Multipel value selected.
    const [countries, setCountries] = useState([])

    console.log(country)

    console.log(countries)

    return (
        //##########################################################################################################
        // BT - The Box allows us to have an ability to set the width and the height. The intention is to put the
        //      select option within this Box. We also need to set the width of the TextField to: fullWidth.
        //##########################################################################################################
        <Box width="250px">
            <TextField 
            label="Select Country" 
            select value={country} 
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='HONGKONG'>Hong Kong</MenuItem>
            </TextField>

            <TextField 
            label="Select Country" 
            select value={countries} 
            onChange={(e) => setCountries(e.target.value)}
            fullWidth
            SelectProps={{
                multiple: true
            }}
            size="small"
            color="success"
            helperText='Please, select your country'
            error
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='HONGKONG'>Hong Kong</MenuItem>
            </TextField>
        </Box>

        
    )
}

export default MuiSelect