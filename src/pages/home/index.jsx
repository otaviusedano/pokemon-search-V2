import React from 'react'

import Pokedex from '../../components/pokedex'
import Header from '../../components/header'
import Pagation from '../../components/pagination'
import ContainerPage from '../../components/containerPage'
import './styles.scss'

function Home () {
  return (
    <ContainerPage display={'flex-column'}>
      <Header/>
      <main className='container-pokedex'>
        <Pokedex/>
      </main>
      <Pagation/>
    </ContainerPage>
  )
}

export default Home
