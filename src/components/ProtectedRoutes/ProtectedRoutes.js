

// BT - Management data using Context
// import UserContext from '../Context/UserContext';
// import { useContext } from 'react';

//BT - Router
import { Route, Redirect } from 'react-router-dom';



function ProtectedRoutes({component: Component, ...rest}) {

    const isLoggedIn = localStorage.getItem('isLoggedIn')
    console.log(`BT - ProtectedRoutes.js - ${isLoggedIn}`)

    return (

        <Route
        {...rest}
        render={(props) => {
            
            if (isLoggedIn){
                return <Component />
            }
            else{
                return (
                    <Redirect to={ { pathname: '/login', state: { from: props.location}}} />
                )
            }
        }}
        >

        </Route>
    )    


}

export default ProtectedRoutes