import React from 'react'

import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'

import { useState } from 'react'

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

import BookmarkIcon from '@mui/icons-material/Bookmark'

function MuiCheckBox() {

    const [Accept, setAccept] = useState(false)

    const [skills, setSkills] = useState([])

    const handleSkills = (e) => {
        const index = skills.indexOf(e.target.value)
        if (index === -1) {
            // BT - If it is not in the array, added to the array
            setSkills([...skills, e.target.value])
        }
        else {
            // BT - Compare each item and if the item is not equal to the current e.target.value
            //      then keep it in the array. If it is equal, then drop it, return the array with
            //      all the items that are not
            setSkills(skills.filter( skill => skill !== e.target.value))
        }
    }

    // console.log(Accept)

    console.log(skills)

    return (
        <Box>
            <Box>

                <FormControlLabel
                label="Accept the condition"
                control={<Checkbox size="small" color="warning" checked={ Accept } onClick={(e) => setAccept(e.target.checked)} />}
                >

                </FormControlLabel>

            </Box>

            <Box>
                <Checkbox 
                icon={<BookmarkBorderIcon />} 
                checkedIcon={ <BookmarkIcon /> }
                checked={ Accept } 
                onClick={(e) => setAccept(e.target.checked)}
                >

                </Checkbox>
            </Box>

            <Box>
                <FormControl error>
                    <FormLabel> Skills </FormLabel>
                    <FormGroup row>

                        <FormControlLabel
                        label="HTML"
                        value='html'
                        control={<Checkbox checked={ skills.includes('html') }
                        // BT - If user is checked, then it will added to the skills array. 
                        onClick={handleSkills} />}
                        >
                        </FormControlLabel>

                        <FormControlLabel
                        label="CSS"
                        value='css'
                        control={<Checkbox checked={ skills.includes('css') } 
                        onClick={handleSkills} />}
                        >
                        </FormControlLabel>

                        <FormControlLabel
                        label="JAVASCRIPT"
                        value='javascript'
                        control={<Checkbox checked={ skills.includes('javascript') } 
                        onClick={handleSkills} />}
                        >
                        </FormControlLabel>


                    </FormGroup>
                    <FormHelperText>Invalid selection</FormHelperText>
                </FormControl>
            </Box>



        </Box>
    )
}

export default MuiCheckBox