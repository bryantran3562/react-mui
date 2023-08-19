import React from 'react'

import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'

import CatchingPokemonIcon  from '@mui/icons-material/CatchingPokemon'

function MuiNavBar() {
    
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit'>
                    <CatchingPokemonIcon></CatchingPokemonIcon>
                </IconButton>

                <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
                    POKEMON
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">
                        Feature
                    </Button>
                    <Button color="inherit">
                        Feature
                    </Button>
                    <Button color="inherit">
                        Feature
                    </Button>
                    <Button color="inherit">
                        Feature
                    </Button>
                </Stack>

                <Menu id="resources-menu">
                    <MenuItem>
                        blogl 1
                    </MenuItem>
                    <MenuItem>
                        blogl 2
                    </MenuItem>
                </Menu>

            </Toolbar>
        </AppBar>
    )
}

export default MuiNavBar