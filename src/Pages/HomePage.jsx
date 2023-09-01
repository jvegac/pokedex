import React from 'react'
import { FaFilter } from 'react-icons/fa';
import { PokemonList, FilterBar } from '../Components'
import '../sass/ListaPokemons.scss'



export const HomePage = () => {
  return (
    <>
      <div className="filter-container">
        <div className="icon-filter"><FaFilter /> Filtrar</div>
      </div>
      <div className="lista-pokemons">
        <PokemonList />
      </div>
      <FilterBar />
    </>
  )
}
