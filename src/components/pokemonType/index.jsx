import React from 'react'

import typeColors from '../../core/services/pokemonTypes'

import './styles.scss'

function PokemonTypes ({ info }) {
  const pokemonTypes = info.types?.map((types, index) => {
    const typeName = types.type.name

    return (
      <div style={{ backgroundColor: typeColors[types?.type?.name] }} key={index} className='types'>
        <span className={types.type.name} key={index}>{typeName}</span>
      </div>
    )
  })

  return (
    <div className='container-types'>
      {pokemonTypes}
    </div>
  )
}

export default PokemonTypes
