import React from 'react'

import { AppBar, Toolbar , IconButton, Typography, Stack } from '@mui/material'

import Box from '@mui/material/Box';

// import SensorsOffIcon from '@mui/icons-material/SensorsOff';
import SensorsIcon from '@mui/icons-material/Sensors';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { Link } from 'react-router-dom'
// https://mui.com/material-ui/material-icons/

// import { styled } from '@mui/system';

// const MyComponent = styled('div')({
//   display: 'flex'
// })


//############################################
// BT - Similiar to Pinnia store.
//############################################

import UserContext from './Context/UserContext';
import { useContext } from 'react';

// BT - Router
import { useHistory } from 'react-router-dom';



const drawerWidth = 240;

function NavBar() {

  // BT - Get data from the store.

  const { user, setUser } = useContext(UserContext)

  const history = useHistory() 

  // const classes = useStyles()

  const isLoggedIn = localStorage.getItem('isLoggedIn')

  console.log(`BT - Navbar.js - isLoggin: ${isLoggedIn}`)

  console.log(`BT - Navbar.js - user: ${JSON.stringify(user)}`)

  let items =  [
          { id: 1, text: 'Home', icon: <InboxIcon />, route: '/' },
          // { text: 'Home', icon: 'mdi-account', route: '/' },
          // { text: 'About', icon: 'mdi-folder', route: '/about' },
          { id: 2, text: 'About', icon: <MailIcon />, route: '/about' },
        // { text: 'Login', icon: 'mdi-earth', route: '/login' },
]



const handleLogOutButtonClicked = () => {
  console.log(`BT - Logout button clicked...`)
  setUser({})
  localStorage.clear()
  history.push('/login')
}


    return (
      // BT - Everything is in a single <Box></Box> instead of a single <div></div>
      <Box sx={{ display: 'flex' }}>
          {/* BT - The AppBar is like a toolbar container */}
          <AppBar 
          position='fixed' 
          color="grey"
          // elevation={1}
          // sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, zIndex: (theme) => theme.zIndex.drawer + 1 }}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            {/* BT - Toolbar is actually a toolbar where you can see the height of the toolbar */}
            <Toolbar>

                <IconButton size="large" color='primary' edge='start'>
                  <SensorsIcon></SensorsIcon>
                </IconButton>

                <Typography color="primary">
                  Sensor 
                </Typography>
                
                <Typography sx={{ 
                  fontStyle: 'bold',
                  flexGrow: 1,
                  paddingLeft: '5px'
                  
                }} 
                color="orange" 
                variant="h5">
                  Charts
                </Typography>

                <Stack
                  sx={{
                    // border: '5px solid'
                }}
                direction="row" spacing={2}
                >
                {
                  !isLoggedIn && (
                    <Link to="/login">
                    <Button style={{ fontSize: '11px'}} variant="outlined" startIcon={<LoginIcon />}>
                      Log in
                    </Button>
                    </Link>
                  )
                }

                {/* BT - If user is not logged in, do not show the logout button */}

                {
                  isLoggedIn && (

                    <Typography 
                    variant='subtitle2'
                    sx={{color: 'warning.main'}}
                    >
                      { user.first_name ? <div> Hi {user.first_name}</div> : null}
                    </Typography>

                  )
                }
               
                { isLoggedIn && (

                  <Link to="/login">
                  <Button style={{ fontSize: '11px'}} variant="outlined" startIcon={<LogoutIcon />} onClick={handleLogOutButtonClicked}>
                    Log out
                  </Button>
                  </Link>

                )}

                {
                  !isLoggedIn && (
                    <Link to="/signup">
                    <Button style={{ fontSize: '11px'}} variant="outlined" startIcon={<PersonIcon />}>
                      Sign up
                    </Button>
                    </Link>
                  )
                }
                </Stack>

            </Toolbar>

          </AppBar>

          {/* BT - If the user is not logged in, then hide this drawer. */}

          {
            isLoggedIn && (
              <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
              }}
              variant="permanent"
              //################################################################################################
              // BT - In order to see the drawer, you must set the anchor either: left, right, top or bottom.
              //      And also put in some content like: Typopgraphy.
              //################################################################################################
              anchor='left'
              >
              <Toolbar />
              <Divider />
              <Box sx={{ overflow: 'auto' }}>
                <List>
                  {items.map((item, index) => (
                  <Link to={`${item.route}`} key={item.id}>
                    <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon sx={{color: 'primary.dark'}}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText sx={{color: 'warning.main'}}><Typography variant="subtitle2">{item.text}</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
              </Drawer>
            )
          }
      </Box>
    )
}

export default NavBar