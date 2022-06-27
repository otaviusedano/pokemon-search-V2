import React from 'react'
import ContainerPage from '../../components/containerPage'
import PokemonDetailsCard from '../../components/pokemonDetailsCard'

import './styles.scss'

function Details () {
  return (
    <ContainerPage display={'flex'}>
      <div className='container-details'>
        <main>
          <PokemonDetailsCard />
        </main>
      </div>
    </ContainerPage>
  )
}

export default Details
