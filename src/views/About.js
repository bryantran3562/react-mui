import { Typography, Box } from '@mui/material'
import React from 'react'

const drawerWidth = 240;

function About() {

    return (
        <Box sx={{ flexGrow: 1, mt: '100px', width: `calc(100% - ${drawerWidth}px)`, mx: '30px' }}>
                {/* <NavBar /> */}           
                {/* <Counter /> */}
                {/* <Counter2 /> */}
                {/* <MyTypography /> */}
                {/* <MyButton /> */}
                {/* <MuiTextField /> */}
                {/* <MuiSelect /> */}
                {/* <MuiRadioButton /> */}
                {/* <MuiCheckBox /> */}
                {/* <MuiSwitch /> */}
                {/* <MuiRating /> */}
                {/* <MuiAutoComplete /> */}
                {/* <MuiBox /> */}
                {/* <MuiCard /> */}
                {/* <MuiAccordion /> */}

                {/* <Toolbar /> */}
                <Typography variant='subtitle-2'>
                    This is a about page.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis facilis eius nemo, asperiores quisquam? Nesciunt earum facilis incidunt recusandae quaerat, expedita vero accusantium atque, 
                    hic ab eum reprehenderit ratione!
                </Typography>

                {/* <LoginForm></LoginForm> */}
        </Box>  
    )
}

export default About