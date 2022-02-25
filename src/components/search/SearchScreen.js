import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = ''} = queryString.parse(location.search)

    // console.log(q)
    // console.log(navigate)

    

    const [formValues, handleInputChange] = useForm( {
        searchText: q
    } );

    const {searchText} = formValues;
    // const heoresFiltered = getHeroesByName( q );
    const heoresFiltered = useMemo(() => getHeroesByName( q ), [q]);

    const handleSearch = ( e ) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`)
        // console.log( 'formValues : ', formValues)
        // console.log( 'searchText : ', searchText)
    }

    return (
        <>
            <h1>Búsquedas</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder='Buscar un héroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            className='btn btn-outline-primary mt-2'
                            type='submit'
                        >
                            Buscar...    
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Resultado</h4>
                    <hr />

                    {
                        (q ==='')
                            ? <div className='alert alert-info'>Buscar un superhéroe</div>
                            : (heoresFiltered.length === 0)
                                && <div className='alert alert-danger' >No hay resultados : { q }</div>

                    }


                    {
                        heoresFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id}
                                { ...hero }

                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

