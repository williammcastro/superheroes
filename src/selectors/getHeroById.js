import { heroes } from "../data/heroes"

export const getHeroById = ( id = '') => {
    //Tirar un throw para cuando la ruta no exista!
    return heroes.find( hero => hero.id === id );
}