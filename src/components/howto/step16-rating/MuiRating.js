import React from 'react'

import { Stack, Rating } from '@mui/material'

import { useState } from 'react'

import FavoriteIcon  from '@mui/icons-material/Favorite'
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder'

function MuiRating() {

    const [data, setData] = useState(null)

    console.log(data)

    return (
        <Stack spacing={2}>
            {/* BT - The precision="0.5" - lets you select half of the star */}
            <Rating 
            precision={0.5}
            value={data} 
            onChange={ (e, newValue) => setData(newValue) }
            icon={<FavoriteIcon fontSize='inherit'/>}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
            // BT - This will select only when you click on the icon. Otherwise, it will select all the icon
            //      up to the value of the icon that you have selected.
            
            highlightSelectedOnly
            />

        </Stack>
    )
}

export default MuiRating