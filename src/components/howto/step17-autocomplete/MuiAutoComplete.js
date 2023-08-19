import React from 'react'

import { Stack, Autocomplete, TextField } from '@mui/material'

import { useState } from 'react'

const skills = ['css','html','javascript','react']

function MuiAutoComplete() {

    const [data, setData] = useState(null)

    console.log(data)

    return (
        <Stack spacing={2} width="250px">
            <Autocomplete
            options={skills}
            renderInput={ (params) => <TextField {...params}  /> }
            value={data}
            onChange={(e, newValue) => setData(newValue)}
            // BT - This will allow you to enter the value to the drop box
            freeSolo
            >
            </Autocomplete>

        </Stack>
    )
}

export default MuiAutoComplete