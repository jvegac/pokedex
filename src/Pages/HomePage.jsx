import React from 'react'
import { FaFilter } from 'react-icons/fa';
import { PokemonList } from '../Components'
import '../sass/index.scss'

export const HomePage = () => {
  return (
    <>
      <div className="filter-container">
        <div className="icon-filter"><FaFilter /> Filtrar</div>
      </div>
      <div className="lista-pokemons">
        <PokemonList />
      </div>
    </>
  )
}
