import React from 'react'
import '../sass/CardPokemon.scss'
import { Link } from 'react-router-dom'


export const CardPokemon = ({pokemon}) => {
  return (
    <>
        <Link>
            <div className="pokemon-card">
                <div className="pokemon-card-info-container">
                    <div className="pokemon-card-name">
                        pikachu
                    </div>
                    <div className="pokemon-card-info">
 
                        <span className="span-card-height">height: </span>
                        <span className="span-card-weight">weight: </span>
                        <span className="span-card-abilities">abilities: </span>
                        
                    </div>
                    <div className="pokemon-card-type">
                        Electricidad
                    </div>
                </div>
                <div className="pokemon-card-image-container">
                    <div className="pokemon-card-image">
                        <img className="pokemon-card-img" src="" alt="Pokemon img" />
                        
                    </div>
                </div>
            </div>
            </Link>
        </>
  )
}
