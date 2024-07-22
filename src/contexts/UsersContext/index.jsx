import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const UserContext = createContext({})

export const useUsersContext = () => useContext(UserContext)



export const UsersContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const path = useLocation().pathname

    useEffect(()=>{
        setUserState()
    }, [user])

  
    const getUserToken = () => {
        const tokenUser = sessionStorage.getItem('tokenUser')
        return JSON.parse(tokenUser).user
    }

    // const setUserToken = (user) => {
    //     sessionStorage.setItem('tokenUser', JSON.stringify({
    //         user
    //     }))       
    // }

    const setUserState = () => {
        const tokenUser = getUserToken()
        if (tokenUser) {
            setUser(tokenUser)
        }
    }

   

    if (path === '/cart' || path === '/favorite') {
        
        if ( !getUserToken() ) {
            alert('Debes iniciar sesión para acceder a esta sección')  
            return <Navigate to={'/login'} replace={true} />
        }   
    }
    console.log('user: ', user)

    return (
        <UserContext.Provider value={{

        }}>
            {children}
        </UserContext.Provider>
    )
}