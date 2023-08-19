import React from 'react'

//############################################
//BT - These below are for the reactive data.
//############################################

import { useState } from 'react'

//################################################################################################
// BT - All the button is in this @mui/material
//################################################################################################

import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlineIcon from '@mui/icons-material/FormatUnderlined'

// BT - Stack will stack on 

function MyButton() {

    //################################################################################################
    // BT - These are our reactive data. We need to define it so that React will update our template.
    //################################################################################################

    const [formats, setFormats] = useState([])

    console.log({formats})

    const handleOnChangeButtonGroup = (e, updatedFormat) => {

            setFormats(updatedFormat)
    }

    return (
        <Stack>
            <Stack direction="row" spacing={2}>
                <Button variant="text" color="primary">primary</Button>
                <Button variant="outlined" color="secondary">secondary</Button>
                <Button variant="contained" color="error">error </Button>
                <Button variant="contained" color="info">info</Button>
                <Button variant="contained" color="warning">warning</Button>
                <Button variant="contained" color="success">success</Button>
                <Button variant="contained" color="secondary">secondary</Button>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="warning" size="small" endIcon={<KeyboardArrowRightIcon />} disableRipple>small</Button>
                <Button variant="contained" color="success" size="medium" startIcon={<KeyboardArrowRightIcon />}>success</Button>
                <Button variant="contained" color="secondary" size="large" disableElevation>secondary</Button>
            </Stack>
            <Stack direction="row" spacing={2}>
                <IconButton aria-label="keyboardarrowrighticon" color="warning" onClick={() => alert('Clicked me')}>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Stack>

            <Stack direction="row">
                <ButtonGroup variant="outlined">
                <Button variant="contained" color="warning" size="small" endIcon={<KeyboardArrowRightIcon />}>left</Button>
                <Button variant="contained" color="success" size="small" endIcon={<KeyboardArrowRightIcon />}>center</Button>
                <Button variant="contained" color="secondary" size="small" endIcon={<KeyboardArrowRightIcon />}>right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction="row">
                <ToggleButtonGroup 
                value={formats} 
                onChange={handleOnChangeButtonGroup}
                size="small"
                color="success"
                orientation="vertical">
                    <ToggleButton value="bold">
                        <FormatBoldIcon></FormatBoldIcon>
                    </ToggleButton>
                    <ToggleButton value="italic">
                        <FormatItalicIcon></FormatItalicIcon>
                    </ToggleButton>
                    <ToggleButton value="underline">
                        <FormatUnderlineIcon></FormatUnderlineIcon>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MyButton