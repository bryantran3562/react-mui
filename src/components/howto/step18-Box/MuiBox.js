import React from 'react'

import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

function MuiBox() {

    return (
        
        // BT - Box is a replacement of the div. It accepted props. Allowing you to access to your theme.
        <Paper 
        sx={ {padding:'32px'} }
        elevation={4}
        >
        <Stack
        // BT - Stack is like a frame where you can put your widget inside and it can be in a row or column.
        //      sx is a props that you can put in your css style and you can access theme object. The normal div you can
        //      access the theme.
        sx={{
            border: '1px solid'
        }}
        // BT - default:
        //column
        //row
        //row-reverse
        //column-reverse
        direction="row" spacing={2}
        divider={<Divider orientation='vertical' flexItem />}
        >
            <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '16px',
                '&:hover':{
                    backgroundColor: 'primary.light'
                }

            }}
            >MuiBox
            </Box>
            <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '16px',
                '&:hover':{
                    backgroundColor: 'primary.light'
                }

            }}
            >MuiBox
            </Box>
        </Stack>
        <Grid container my={5}>
            <Grid item xs={6}><Box bgcolor="primary.light" p={2}>Item 1</Box></Grid>
            <Grid item xs={6}><Box bgcolor="primary.light" p={2}>Item 2</Box></Grid>
            <Grid item xs={6}><Box bgcolor="primary.light" p={2}>Item 3</Box></Grid>
            <Grid item xs={6}><Box bgcolor="primary.light" p={2}>Item 4</Box></Grid>
        </Grid>
        </Paper>
    )
}

export default MuiBox