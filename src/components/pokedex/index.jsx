import React, { useState, useEffect, useMemo } from 'react'
// import _ from 'lodash'

import { getAll } from '../../core/api'
import Card from '../card'

import './index.scss'

function Pokedex () {
  const [pokemonViewState, setPokemonViewState] = useState([])
  const [filterName, setFilterName] = useState('')
  // const [filterType, setFilterType] = useState([])

  useEffect(() => {
    const allPokemons = async () => {
      const res = await getAll()
      const pokemons = await res.results

      setPokemonViewState(pokemons)
    }

    allPokemons()
  }, [])

  const filterPokemons = useMemo(() => {
    const lower = filterName.toLowerCase()
    return pokemonViewState.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(lower.trim())
    )
  }, [pokemonViewState, filterName])

  return (
    <div className='container-pokedex'>
      <form className='container-search'>
        <input value={filterName} type="text" onChange={(e) => setFilterName(e.target.value)} />
      </form>
      <div className='container-pokemons'>
        { filterPokemons.map((pokemon, index) => (
          <div key={index}>
            <Card id={index + 1} name={pokemon.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pokedex
