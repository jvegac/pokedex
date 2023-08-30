import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'

export const PokemonProvider = ({ children }) => {

    const [offset, setOffset] = useState(0)

    //Llamado a los primeros 30 pokemones
    const getPokemons = async (limit = 30) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch('${baseURL}pokemon?limit=${limit}&offset=${offset}')
        const data = await res.json();
        console.log(data)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <PokemonContext.Provider value={{ numero: 0 }}>
            {children}
        </PokemonContext.Provider>

    )

}
