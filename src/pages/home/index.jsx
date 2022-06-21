import React, { useState } from 'react'

import getPokemonByName from '../../core/helper/getPokemonByName'

import Pokedex from '../../components/pokedex'
import Header from '../../components/header'
import Pagation from '../../components/pagination'
import './styles.scss'
import ContainerPage from '../../components/containerPage'

function Home () {
  const [pokemonsPerPage, setPokemonsPerPage] = useState(0)
  const [totalPokemons, setTotalPokemons] = useState(0)
  const [filterName, setFilterName] = useState('')
  const [pokemonSearched, setPokemonSearched] = useState([])
  const [result, setResult] = useState(false)

  const searchPokemon = async () => {
    const pokemon = await getPokemonByName(filterName)
    setPokemonSearched(pokemon)
    console.log(pokemon)
    setResult(true)
  }

  return (
    <ContainerPage display={'flexColumn'}>
      <Header
        search={searchPokemon}
        setFilter={setFilterName}
        filter={filterName}
      />
      <main>
        <Pokedex
          filter={filterName}
          pokemons={pokemonsPerPage}
          result={result}
          setResult={setResult}
          pokemonFinded={pokemonSearched}
          total={setTotalPokemons}
          pokemonsPerPage={pokemonsPerPage}
        />
      </main>
      <Pagation
        limit={20}
        total={totalPokemons}
        offset={pokemonsPerPage}
        setOffset={setPokemonsPerPage}
      />
    </ContainerPage>
  )
}

export default Home
