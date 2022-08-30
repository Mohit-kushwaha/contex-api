import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
})

export const AuthContextProvider = props =>
{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() =>
    {
        const logInfo = localStorage.getItem('isLogged')
        if (logInfo === '1') { setIsLoggedIn(true) }
    }, [])
    const logoutHandler = () =>
    {
        localStorage.removeItem('isLogged')
        setIsLoggedIn(false)
    }
    const loginHandler = () =>
    {
        localStorage.setItem('isLogged', '1')
        setIsLoggedIn(true)
    }
    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
    }}>{props.children}</AuthContext.Provider>
}

export default AuthContext