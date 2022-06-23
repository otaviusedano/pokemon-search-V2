import React from 'react'
import { pokemonTypesMapper } from '../../core/helper/pokemonMapper'

import './styles.scss'

function PokemonTypes ({ pokemon }) {
  return (
    <div className='container-types'>
      {pokemonTypesMapper(pokemon)}
    </div>
  )
}

export default PokemonTypes
