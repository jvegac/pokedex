import React, {useState, useContext} from 'react'
import { PokemonContext } from '../Context/PokemonContext'
import { IoClose } from 'react-icons/io5'
import '../sass/ModalCard.scss'
import { iniMayuscula } from '../../helper/helper'

export const ModalCard = ({pokemon}) => {

  return (
    <>
    <div className="pokemon-modal-overlay">
        <div className="pokemon-modal">
            <div className="pokemon-modal-content">
                <div className="pokemon-modal-nombre">
                    <h1>{iniMayuscula(pokemon.name)}</h1>
                    <h3>N° {pokemon.id}</h3>
                </div>
                <button className="btn-modal-close" onClick={onClose}>
                    <IoClose />
                </button>
                <div className="pokemon-modal-img-container">
                    <img className="pokemon-modal-img" alt={`Pokemon ${pokemon.name}`} 
                    src={pokemon.sprites.other.dream_world.front_default}/>
                </div>
                <div className="pokemon-modal-info-container">
                    <div className="pokemon-modal-lugares">
                        Lugares: {pokemon.version_details.location_area_encounters}
                    </div>
                    <div className="pokemon-modal-estadisticas">
                        Estadisticas
                    </div>
                </div>

            </div>
        </div>
    </div>

</>
  )
}
