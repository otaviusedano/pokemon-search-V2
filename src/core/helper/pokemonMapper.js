import React from 'react'

import typeColors from '../../core/services/pokemonTypes'

export const pokemonStats = (pokemon) => pokemon.stats?.map((type, index) => {
  const stats = type.base_stat
  return (
    <div key={index}>
      <h2>{stats}</h2>
    </div>
  )
})

export const pokemonTypes = (pokemon) => pokemon?.types?.map((types, index) => {
  const typeName = types?.type?.name

  return (
    <div style={{ backgroundColor: typeColors[types?.type?.name] }} key={index} className='types'>
      <span className={types.type.name} key={index}>{typeName}</span>
    </div>
  )
})
