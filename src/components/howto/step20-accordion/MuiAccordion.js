import React from 'react'

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { useState } from 'react'

function MuiAccordion() {

    const [expanded, setExpanded] = useState(null | false)

    console.log(expanded)

    const handleOnChangeExpanded = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : null | false)
    }

    return (
        <div>
        <Accordion 
        expanded={ expanded === 'panel1' }
        onChange={(e,isExpanded) => handleOnChangeExpanded(isExpanded, 'panel1')}
        >
            <AccordionSummary id='panel1-header'
            expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordion 1</Typography>

            </AccordionSummary>

            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eaque quae qui eveniet fugit officia ad est sint laboriosam cumque quis? Impedit aperiam ad, 
                    ea perferendis incidunt sit maxime sequi quaerat.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion 
        expanded={ expanded === 'panel2' }
        onChange={(e,isExpanded) => handleOnChangeExpanded(isExpanded, 'panel2')}
        >
            <AccordionSummary id='panel2-header'
            expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordion 2</Typography>

            </AccordionSummary>

            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eaque quae qui eveniet fugit officia ad est sint laboriosam cumque quis? Impedit aperiam ad, 
                    ea perferendis incidunt sit maxime sequi quaerat.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion 
        expanded={ expanded === 'panel3' }
        onChange={(e,isExpanded) => handleOnChangeExpanded(isExpanded, 'panel3')}
        >
        <AccordionSummary id='panel3-header'
        expandIcon={<ExpandMoreIcon />}
        >
            <Typography>Accordion 3</Typography>

        </AccordionSummary>

            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eaque quae qui eveniet fugit officia ad est sint laboriosam cumque quis? Impedit aperiam ad, 
                    ea perferendis incidunt sit maxime sequi quaerat.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
    )
}

export default MuiAccordion