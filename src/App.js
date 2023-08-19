// import logo from './logo.svg';
import './App.css';
//###########################################################################
// BT - Import stuff for using react-router-dom.
//###########################################################################
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// #################################################################################################################
// BT - Step1: Below import are for the 'theme'. It is a giant object that has a predefine values for each theme.
//      We can then over ride it.
// #################################################################################################################

import { createTheme , ThemeProvider, Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from './components/NavBar'
import LoginForm from './components/Forms/LoginForm'
import SignUpForm from './components/Forms/SignUpForm'
import { UserProvider } from './components/Context/UserContext';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import UserActivation from './components/Forms/UserActivation';
// import userEvent from '@testing-library/user-event';
// import { orange } from '@mui/material/colors';

// import UserContext from './components/Context/UserContext';
// import { useContext } from 'react';



//#########################################################################
// BT - Link to the object that you can over ride their property:
//      https://v4.mui.com/customization/default-theme/#default-theme
//#########################################################################


// #################################################################
// BT - Step2: Call the function and modify the item that you want.
// #################################################################

// const theme = createTheme({

//   palette: {
//     primary: {
//       main: '#fefefe',
//     },
    // BT - The Material UI will automatically applied all 3 light, main, dark for you. You don't
    //      have to worry about it. You just need to specify the color.
//     secondary: purple
//   },
//   typography: {
//     fontFamily: 'Quicksand',
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 700

//   }

// })

// BT - You must call the createTheme and pass in an object with your item or property that you would like
//      to change. The structure must match with the Mui structure.
//      https://mui.com/material-ui/customization/default-theme/

const theme = createTheme({

  // palette: {
  //   secondary: {
  //     main: orange[500]
  //   }
  // }

})

// const drawerWidth = 240;

function Copyright(props) {

  return (
      <Typography variant="body2" color="primary.main" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
          Bryan Tran
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      </Typography>
  );
}

function App() {

  // const { user } = useContext(UserContext)

  // console.log(`BT - App.js - user: ${user}`)


  return (

    // #####################################################################
    // BT - Step3: Then call 'ThemeProvide' and pass in your theme={theme}
    // #####################################################################
    <ThemeProvider theme={theme}>
      <div>
        {/* BT - UserProvider is a Context API, to allow you to see the data in one place
                 and all components can access it anywhere or how it is nested. This is so that
                 you don't have to pass props to your children and drill all way down to nested
                 children...etc. 
         */}
        <UserProvider>         
            {/* BT - Router */}
            <Router>
            <Box sx={{ display: 'flex' }}>
            <CssBaseline />
              <NavBar />

                  <Switch>                  
                      <Route path="/login">
                        <LoginForm />
                      </Route>
                      <Route path="/signup">
                        <SignUpForm />
                      </Route>                   
                      <ProtectedRoutes exact path="/" component={Home}>
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/about" component={About}>
                      </ProtectedRoutes> 
                      <Route path='/user_activate/users/activation/:uid/:token'>
                        <UserActivation />
                      </Route>               
                  </Switch>

                  
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
            </Router>
          </UserProvider>
        </div>

      </ThemeProvider>
  );
}

export default App;
