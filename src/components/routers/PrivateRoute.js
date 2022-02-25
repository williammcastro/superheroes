import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'


export const PrivateRoute = ( {children} ) => {

    const {user} = useContext(AuthContext)

    //segmento para guardar la ultima ruta y q cuando entre nuevamente quede en ella
    const {pathname, search} = useLocation();
    localStorage.setItem('lastPath', pathname + search)

        //el children es <Dashboard>, osea el q esta en AppRouter.js en medio de los <PrivateRouter>
    return user.logged
        ? children
        : <Navigate to='/login' />
}
