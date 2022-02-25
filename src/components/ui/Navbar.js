import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const Navbar = () => {

    //implementacion del AuthContext para tomar el nombre y colocarlo en el navbar
    const {user, dispatch} = useContext(AuthContext)

    // console.log(user.name)
    //implementacion del navigate para usar los metodos de navigate
    const navigate = useNavigate()

    const handleLogout = () => {

        const action = {
            type: types.logout
        }

        dispatch(action);

        navigate('/login', {
            replace:true
        })
        // console.log('Logout')
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        // className={ ({isActive}) => 'nav-item nav-link' + (isActive ? 'active' : '') } 
                        className={'nav-item nav-link'}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={'nav-item nav-link'}
                        // className={ ({isActive}) => 'nav-item nav-link' + (isActive ? 'active' : '') } 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={'nav-item nav-link'}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {user.name}
                    </span>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}