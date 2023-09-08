import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { PokemonContext } from './PokemonContext'

export const PokemonProvider = ({ children }) => {

    const [initPokemons, setInitPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [allPokemons, setAllPokemons] = useState([])

    //Estados
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)
    const [loadMore, setLoadMore] = useState(true)

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

    //función de filtrado
    const [typeSelected, setTypeSelected] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
        shadow: false,
    })
    const [filteredPokemons, setFilteredPokemons] = useState([])
    const handleCheckbox = e => {
        setTypeSelected({
            ...typeSelected, [e.target.name]: e.target.checked
        })

        if (e.target.checked) {
            const filteredResults = allPokemons.filter(pokemon => pokemon.types.map(type => type.type.name)
                .includes(e.target.name))
            setFilteredPokemons([...filteredPokemons, ...filteredResults])
        } else {
            const filteredResults = filteredPokemons.filter(pokemon => !pokemon.types.map(type => type.type.name)
                .includes(e.target.name))
            setFilteredPokemons([...filteredResults])
        }
    }

    return (
        <PokemonContext.Provider value={{
            initPokemons,
            allPokemons,
            getPokemonByID,
            handleCheckbox,
            filteredPokemons
        }}>
            {children}
        </PokemonContext.Provider>

    )



}
