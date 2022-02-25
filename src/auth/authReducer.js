import { types } from "../types/types";

//Esta es la forma de mi state, para tenerlo como referencia
// const state = {
//     name  : 'william',
//     logged: true
// }

// mire como qda un posible action y esto seria lo q se esparce en el payload de la linea 27
// const loginAction = {
//     type: types.login,
//     payload: {
//         name:'william',
//         email:'william@castro.com'
//     }
// }




export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                // name: action.payload.name,//opcion larga
                ...action.payload,//opcion corta con el sperad
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;//esto es en el caso q no caiga en ninguna de las anteriores, y regresa state para q no haya ningun cambio
    }
}