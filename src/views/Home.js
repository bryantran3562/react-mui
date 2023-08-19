import React, { useCallback } from 'react'
// import MyTypography from '../components/howto/step10-typography/MyTypography'
import { Box, Typography } from '@mui/material'
// import MyButton from '../components/howto/step11-button/MyButton'
// import MuiTextField from '../components/howto/step12-text/MuiTextField'
// import MuiSelect from '../components/howto/step13-select/MuiSelect'
// import MuiRadioButton from '../components/howto/step14-radio-button/MuiRadioButton'
// import MuiCheckBox from '../components/howto/step14-checkbox/MuiCheckBox'
// import MuiSwitch from '../components/howto/step15-switch/MuiSwitch'
// import MuiRating from '../components/howto/step16-rating/MuiRating'
// import MuiAutoComplete from '../components/howto/step17-autocomplete/MuiAutoComplete'
// import MuiBox from '../components/howto/step18-Box/MuiBox'
// import MuiCard from '../components/howto/step19-card/MuiCard'
// import MuiAccordion from '../components/howto/step20-accordion/MuiAccordion'
// import MuiNavBar from '../components/howto/step21-navbar/MuiNavBar'
import { useEffect } from 'react'

// // import Counter from '../components/howto/step9-custom-hook/Counter';
// // import Counter2 from '../components/howto/step9-custom-hook/Counter2';

// import NavBar from '../components/NavBar';
// import LoginForm from '../components/Forms/LoginForm'

// BT - Management data using Context
import UserContext from '../components/Context/UserContext';
import { useContext } from 'react';

//BT - Router
// import { useHistory } from 'react-router-dom';

import axios from 'axios'


const url_log_in = 'http://localhost:8000/djoser_auth/users/me/'

//##########################################################################################
// BT - VERY IMPORTANT: Any time you use icon or anything from MUI, you must import them.
//##########################################################################################

const drawerWidth = 240;

function Home() {

    // BT - Get data from the store.

    const { user, setUser } = useContext(UserContext)


    const getUser = useCallback(async ()=> {

        const header = { headers: {
            Authorization: 'Token ' + localStorage.getItem('token')
            }
        } 

        const res = await axios.get(url_log_in,header)
        setUser(res.data)

    },[setUser])


    //####################################################################
    // BT - The rule is that:
    //No array: it will run whenever the component renders/re-renders.
    //[]: This will only run once, and unless your refresh the page.
    //[xxx]: It will run each time the 'xxx' is changed.
    //####################################################################

    useEffect(() => {

        //###############################################################################################
        // BT - So then each time you are using useEffect() hook, it will render your UI when
        //      there is a change. The issue is that - if only one component change in the UI, the
        //      React would render the whole page in which the other components did not change. But
        //      it is also being re-render. 
        //      To prevent this, you must use: useMemo for primitive type, objects, array...
        //      Use: useCallBack() for function.
        //      Because each render, the function will get a different references.
        //###############################################################################################



        // const header = { headers: {
        //     Authorization: 'Token ' + localStorage.getItem('token')
        //     }
        // } 

        // axios.get(url_log_in,header)
        // .then((response) => {

        //     console.log(`BT - Home.js - getting data: ${response.data}`)
        //     setUser(response.data)
            
        // })
        // .catch ((error) => {
        //     console.log(error.message)
        // }) 

        getUser()
        .catch((err) => {
            console.log(`BT - Home.js - useEffect(): ${err.response}`)
        })

        // BT - If you are using subscription or event listener, then you will need to
        //      have a clean up function.
        //      return () => { Inside here is our clean up code. ie - remove your event listenner }


        // #eslint-disable-next-line
    },[getUser])



    // BT - Get data from the store.

    // const { user } = useContext(UserContext)

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis facilis eius nemo, asperiores quisquam? Nesciunt earum facilis incidunt recusandae quaerat, expedita vero accusantium atque, 
                    hic ab eum reprehenderit ratione!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam corporis suscipit in explicabo quisquam placeat odio commodi dignissimos accusantium repellat fugit qui ea nam ad sed, modi neque nostrum quasi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi numquam deserunt temporibus, sapiente nihil eveniet! Quae, alias inventore harum voluptatibus porro, quos id illo distinctio quasi at, fugiat sed!
                </Typography>

                <Typography variant='subtitle2' color="orange"> Hi { user.first_name } </Typography>

                {/* <LoginForm></LoginForm> */}
        </Box>        
                
    )
}

export default Home