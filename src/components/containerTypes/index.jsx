import React from 'react'
import { pokemonTypes } from '../../core/helper/pokemonMapper'

import './styles.scss'

function ContainerTypes ({ pokemon }) {
  return (
    <div className='container-types'>
      {pokemonTypes(pokemon)}
    </div>
  )
}

export default ContainerTypes
