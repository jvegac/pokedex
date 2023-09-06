import React, { useContext, useState } from 'react'
import { PokemonContext } from '../Context/PokemonContext'
import { CardPokemon, ModalCard } from './index'
import '../sass/ListaPokemons.scss'


export const PokemonList = () => {
  const { initPokemons } = useContext(PokemonContext)
  const [OpenModal, setOpenModal] = useState(false)

  return (
    <>
      <div className="lista-pokemons">
        {initPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
      </div>
      
    </>
  )
}
