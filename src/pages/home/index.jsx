import React, { useState } from 'react'

import getName from '../../core/api'

import Pokedex from '../../components/pokedex'
import Header from '../../components/header'
import Pagation from '../../components/pagination'
import './index.scss'

function Home () {
  const [pokemonsPerPage, setPokemonsPerPage] = useState(0)
  const [totalPokemons, setTotalPokemons] = useState(0)
  const [filterName, setFilterName] = useState('')
  const [pokemonSearched, setPokemonSearched] = useState([])
  const [result, setResult] = useState(false)

  const searchPokemon = async () => {
    const res = await getName(filterName)
    const pokemons = await res
    setPokemonSearched(pokemons)
    setResult(true)
  }

  return (
    <div className='home-page'>
      <Header
        search={searchPokemon}
        setFilter={setFilterName}
        filter={filterName}
      />
      <Pokedex
        filter={filterName}
        pokemons={pokemonsPerPage}
        result={result}
        setResult={setResult}
        pokemonFinded={pokemonSearched}
        total={setTotalPokemons}
        pokemonsPerPage={pokemonsPerPage}
      />
      <Pagation
        limit={20}
        total={totalPokemons}
        offset={pokemonsPerPage}
        setOffset={setPokemonsPerPage}
      />
    </div>
  )
}

export default Home
