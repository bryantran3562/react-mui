import React from 'react'
// BT - import useState hook
import { useState } from 'react'

function ObjectUseState() {

    // BT - Step 1: Declare your variable and then useState to initialize your variable. 
    //              name: object and firstName and lastName are object member. They are initialized to empty string.
    //              Note: destructure your variable and you also automatically received a setXXX function back
    //                    useState hook. This is so that you can use this funtion to update your variable.

    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })

    //####################################################################################################################
    // BT - Note: how to use the setName to update your variable. Note: all the HTML element will give you an 'e' object
    //            so that you can know which value it is current has or change.
    //####################################################################################################################

    const handleOnChangeFirstName = (e) => {
        setName({

            //##########################################################################################################
            // BT - This is how you to read it. take all the object '...name' and then update only teh firstName item.
            //########################################################################################################## 

            ...name,
            firstName: e.target.value
        })
    }

    return (
        <div>

            <input type="text" value={name.firstName} onChange={handleOnChangeFirstName}></input>
            <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})}></input>
            <h3>{ name.firstName } - { name.lastName }</h3>

        </div>
    )
}

export default ObjectUseState