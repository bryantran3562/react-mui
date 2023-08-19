import { createContext, useState } from 'react'


//#######################################################################################
// BT - Once you have initialized a createContext(). It will give you two methods:
//Provider.
//Consumer.
// The ideal of using Context API is allowing you to access the data from any component.
// This is so that you don't have to pass it as a props.
// However, it will lose the data if you click on the 'refresh' button.
// 
//#######################################################################################

const UserContext = createContext()


export function UserProvider({children}){


    const [user, setUser] = useState({})


    return(
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContext