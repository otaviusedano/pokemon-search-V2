import React from 'react'
import ContainerPage from '../../components/containerPage'
import PokemonDetailsCard from '../../components/pokemonDetailsCard'

import './styles.scss'

function Details () {
  return (
    <ContainerPage display={'flex'}>
      <main>
        <PokemonDetailsCard />
      </main>
    </ContainerPage>
  )
}

export default Details
