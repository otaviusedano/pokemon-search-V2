import React from 'react'

import { pokemonStatsMapper } from '../../core/helper/pokemonMapper'

import './styles.scss'

function PokemonStats ({ pokemon }) {
  return (
    <div className='container-stats'>
      {pokemonStatsMapper(pokemon)}
    </div>
  )
}

export default PokemonStats
