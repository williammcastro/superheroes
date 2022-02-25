import React, { useReducer, useEffect } from 'react'
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './components/routers/AppRouter';


const init = () =>{

    return JSON.parse( localStorage.getItem('user') ) || { logged: false};

    //este es un return de un obj de pruebas para ver si se renderiza en el navbar mi nombre!
    // return{
        // logged: true,
        // name: 'william temporal'
    // }
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer( authReducer , {}, init)

    useEffect(() => {
      if (!user) return;

        localStorage.setItem( 'user', JSON.stringify(user) )

    }, [user])
    
    return(
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
