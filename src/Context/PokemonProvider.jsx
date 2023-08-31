import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { PokemonContext } from './PokemonContext'

export const PokemonProvider = ({ children }) => {

    const [initPokemons, setInitPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [allPokemons, setAllPokemons] = useState([])

    //Estados
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    //Llamado a los primeros 30 pokemones
    const getPokemons = async (limit = 30) => {
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();
        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setInitPokemons([...initPokemons, ...results])
        setLoading(false)
    }

    //Llamado a todos los pokemones para el filtrado
    const getAllPokemons = async () => {
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json();
        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setAllPokemons(results)
        setLoading(false)

    }

    //Llamado a pokemon por ID
    const getPokemonByID = async (id) => {
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json()
        return data

    }

    useEffect(() => { getPokemons() }, [])

    useEffect(() => {
        getAllPokemons()

    }, [])



    return (
        <PokemonContext.Provider value={{ initPokemons, allPokemons, getPokemonByID }}>
            {children}
        </PokemonContext.Provider>

    )

}
