import React from 'react'

import typeColors from '../../core/services/pokemonTypes'

import './styles.scss'

function PokemonTypes (poke) {
  const pokemonTypes = poke?.info?.types?.map((types, index) => {
    const typeName = types?.type?.name

    return (
      <div style={{ backgroundColor: typeColors[types?.type?.name] }} key={index} className='types'>
        <span className={types.type.name} key={index}>{typeName}</span>
      </div>
    )
  })

  return (
    <div className='container__types'>
      {pokemonTypes}
    </div>
  )
}

export default PokemonTypes
