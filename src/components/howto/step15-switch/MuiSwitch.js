import React from 'react'

import { Box, FormControlLabel, Switch } from '@mui/material'

import { useState } from 'react'

function MuiSwitch() {

    const [checked, setChecked] = useState(false)

    console.log(checked)

    return (
        <Box>
            <FormControlLabel 
            label="Dark Mode"
            control={<Switch size="small" color="success" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>}>

            </FormControlLabel>
        </Box>
    )
}

export default MuiSwitch