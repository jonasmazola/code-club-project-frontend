import React, { createContext, useContext, useEffect, useState } from "react";
import propTypes from "prop-types";


const UserContext = createContext({

})


export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState({})

    const putUserDate = async userInfo => {
        setUserData(userInfo)

        await localStorage.setItem('codeburger:userDate', JSON.stringify(userInfo))

    }

    const logout = async () => {
        await localStorage.removeItem('codeburger:userDate')
    }

    useEffect(() => {
        const loadUserDate = async () => {
            const clientInfo = await localStorage.getItem('codeburger:userDate')
            
            if(clientInfo){
                setUserData(JSON.parse(clientInfo))
            }
       
        }

        loadUserDate()
    }, [])

    return (
        <UserContext.Provider value={{ putUserDate, userData,logout }}>
            {children}
        </UserContext.Provider>
    )
}


export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("User nao valido")
    }

    return context
}



UserProvider.propTypes = {
    children: propTypes.node
}

