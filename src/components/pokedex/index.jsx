import React, { useState, useEffect } from 'react'

import { getAll } from '../../core/api'
import Card from '../card/index'

import './styles.scss'

function Pokedex ({ total, pokemonFinded, result, setResult, pokemonsPerPage, filter }) {
  const [pokemonViewState, setPokemonViewState] = useState([])

  const getPokemons = async (amount) => {
    const res = await getAll(amount)
    const pokemons = await res.results
    setPokemonViewState(pokemons)
    total(res.count)
    setResult(pokemonFinded.length)
  }

  useEffect(() => {
    getPokemons(pokemonsPerPage)
  }, [pokemonsPerPage, filter.length === 0])

  const filterPokemons = () => {
    const pokemonFilter = filter.toLowerCase()
    return pokemonViewState.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonFilter.trim(' '))
    )
  }

  const pokemonFiltered = filterPokemons().map((pokemon, index) => (
    <div key={index}>
      <Card pokemonName={pokemon.name} />
    </div>
  ))

  const pokemonResult =
    <div>
      <Card pokemonName={pokemonFinded.name} />
    </div>

  return (
    <section>
      <div className='container-pokemons'>
        {result ? pokemonResult : pokemonFiltered}
      </div>
    </section>
  )
}

export default Pokedex
