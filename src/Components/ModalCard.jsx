import React, { useState, useContext } from 'react'
import { IoClose } from 'react-icons/io5'
import '../sass/ModalCard.scss'

export const ModalCard = ({ pokemon, onClose }) => {
    
    return (
        <>
        <div className="modal-container">
            <div className="pokemon-modal">
                <div className="pokemon-modal-nombre">
                    <h1>Pokémon</h1>
                    <h3>N° 001</h3>
                </div>
                <button className="btn-modal-close">
                    <IoClose />
                </button>
                <div className="pokemon-modal-img-container">
                    <img className="pokemon-modal-img" alt="Pokémon name" />
                </div>
                <div className="pokemon-modal-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores fugit facilis cum explicabo, sed, accusantium, animi temporibus veniam unde fuga magnam dignissimos id hic quaerat vero odio! Maiores, quibusdam.</p>
                </div>
            </div>
            </div>
        </>
    )
}
