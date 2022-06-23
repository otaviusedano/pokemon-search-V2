import React from 'react'

import PokemonTypes from '../pokemonTypes/index'

import './styles.scss'

function PrincipalInfos ({ pokemon }) {
  const pokemonImg = pokemon?.sprites?.front_default
  const pokemonName = pokemon.name
  const pokemonId = pokemon.id

  return (
    <div className='container-infos'>
      <span>#{pokemonId}</span>
      <h1> {pokemonName} </h1>
      <img src={pokemonImg} alt="pokemonImage" />
    <PokemonTypes pokemon={pokemon} />
    </div>
  )
}

export default PrincipalInfos
