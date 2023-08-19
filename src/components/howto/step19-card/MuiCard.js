import React from 'react'

import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

function MuiCard() {

    return (
        <Box width="300px">
            <Card>

                <CardMedia
                component='img'
                height='140'
                image='https://source.unsplash.com/random'>

                </CardMedia>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        React
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nobis, 
                        tempore fuga reiciendis culpa ex suscipit illum dicta sunt minus expedita 
                        corporis nihil ipsa fugiat modi, aperiam perferendis. Cumque, iusto!
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">
                        Share
                    </Button>
                    <Button size="small">
                        Learn More
                    </Button>
                </CardActions>

            </Card>
        </Box>
    )
}

export default MuiCard