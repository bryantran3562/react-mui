import React from 'react'

import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'

import { useState } from 'react'

function MuiRadioButton() {

    const [data, setData] = useState('')

    console.log(data)

    return (
        <Box>
            {/* BT - error: will put out the message below in red color */}
            <FormControl error>
                <FormLabel id='job-experience-group-label'
                >
                    Year of experience
                </FormLabel>
                <RadioGroup 
                name='job-experience-group'
                aria-labelledby='job-experience-group-label'
                value={data}
                onChange={(e) => setData(e.target.value)}
                // BT - This will put it in a row instead of vertical
                row
                >
                    <FormControlLabel
                    control={<Radio size="small" color="warning" />} 
                    value='0-2' 
                    label='0-2'>
                    </FormControlLabel>
                    <FormControlLabel
                    control={<Radio />} 
                    value='3-5' 
                    label='3-5'>
                    </FormControlLabel>
                    <FormControlLabel
                    control={<Radio />} 
                    value='6-10' 
                    label='6-10'>
                    </FormControlLabel>
                </RadioGroup>
            </FormControl>
            <FormHelperText>Invalid</FormHelperText>
        </Box>
    )
}

export default MuiRadioButton