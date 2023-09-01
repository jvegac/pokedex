import React, { useState} from 'react'
import '../sass/CardPokemon.scss'
import { Link } from 'react-router-dom'
import { iniMayuscula } from '../../helper/helper'

export const CardPokemon = ({ pokemon, onClick }) => {
    return (
        <>
            <div className="pokemon-card" onClick={onClick} >
                <div className="pokemon-card-info-container">
                    <div className="pokemon-card-name">
                        {iniMayuscula(pokemon.name)}
                    </div>
                    <div className="pokemon-card-info">

                        <span className="span-card-height">Height: {pokemon.height} </span>
                        <span className="span-card-weight">Weight: {pokemon.weight}</span>
                        <span className='span-card-abilities' >Abilities:
                            {pokemon.abilities.map(abilities => (
                                <span key={abilities.ability.name} className={abilities.ability.name}>
                                    {abilities.ability.name}
                                </span>
                            ))}
                        </span>

                    </div>
                    <div className='pokemon-card-type'>
                        {pokemon.types.map(type => (
                            <span key={type.type.name} className={type.type.name}>
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="pokemon-card-image-container">
                    <img className="pokemon-modal-img" alt={`Pokemon ${pokemon.name}`}
                        src={pokemon.sprites.other.dream_world.front_default} />
                </div>
            </div>
        </>
    )
}
