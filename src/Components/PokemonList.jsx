import React, {useContext}from 'react'
import { PokemonContext } from '../Context/PokemonContext'
import { CardPokemon } from './CardPokemon'

export const PokemonList = () => {
 const {initPokemons} = useContext(PokemonContext)
    return (
    <>
        <div className="lista-pokemons">
        {initPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key ={pokemon.id}/>)}
        </div>
    </>
  )
}
