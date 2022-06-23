import React from 'react'

import typeColors from '../../core/services/pokemonTypes'

const pokemonStatsMapper = (pokemon) => pokemon.stats?.map((type, index) => {
  const statName = type.stat.name
  const statBase = type.base_stat
  const statNameSplited = statName.split('-')
  const statNameRefact = statNameSplited.map((name) => {
    const statNameSubStr = name.substring(0, 3)
    return statNameSubStr
  })
  const statNameJoin = statNameRefact.join('-')

  return (
    <div key={index}>
      <h2>{statNameJoin}</h2>
      <h2>{statBase}</h2>
    </div>
  )
})

const pokemonTypesMapper = (pokemon) => pokemon?.types?.map((types, index) => {
  const typeName = types.type.name

  return (
    <div style={{ backgroundColor: typeColors[types?.type?.name] }} key={index} className='types'>
      <span className={types.type.name} key={index}>{typeName}</span>
    </div>
  )
})

export { pokemonStatsMapper, pokemonTypesMapper }
