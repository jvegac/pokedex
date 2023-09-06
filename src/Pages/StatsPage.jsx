import React from 'react'
import '../sass/Stats.scss'
import { ModalCard } from '../Components'

export const StatsPage = () => {
  return (
    <>
    <div className="stats-container">
    <div className='container-titulo-stats'>
      <h1 className='titulo-stats'>Gráficos por tipo de Pokémon</h1>
    </div>
    </div>
    <ModalCard />
    </>
  )
}
