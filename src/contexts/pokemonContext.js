import React, { createContext, useState, useEffect } from 'react'

import { getAll } from './../core/api/index'
import getPokemonByName from './../core/helper/getPokemonByName'

import Card from '../components/card'

export const PokemonContext = createContext()

export function PokemonContextProvider ({ children }) {
  const [pokemonViewState, setPokemonViewState] = useState([])
  const [pokemonFinded, setPokemonFinded] = useState([])
  const [offset, setOffset] = useState(0)
  const [pokemonsTotal, setPokemonsTotal] = useState(0)
  const [filterName, setFilterName] = useState('')
  const [result, setResult] = useState(false)
  const defaultLimit = 24

  const getPokemons = async (countInit) => {
    const res = await getAll(countInit)
    const pokemons = await res.results
    setPokemonViewState(pokemons)
    setPokemonsTotal(res.count)
    setResult(false)
  }

  useEffect(() => {
    getPokemons(offset)
  }, [offset, !filterName.length])

  const searchPokemon = async () => {
    const pokemon = await getPokemonByName(filterName.trim(' '))
    if (pokemon === 'Error') {
      setPokemonFinded('Pokemon notFound!')
    } else {
      setPokemonFinded(pokemon)
    }
    setResult(true)
  }

  const handleSubmit = (e) => e.preventDefault()

  const handleChange = (e) => {
    setFilterName(e.target.value)
  }

  const filterPokemons = () => {
    const pokemonFilter = filterName.toLowerCase()
    return pokemonViewState.filter((pokemon) => {
      const pokemoName = pokemon.name.toLowerCase()
      return pokemoName.includes(pokemonFilter.trim(' '))
    })
  }

  const pokemonFiltered = filterPokemons().map((pokemon, index) => (
    <div key={index}>
      <Card pokemonName={pokemon.name} />
    </div>
  ))

  const pokemonResult = pokemonFinded !== 'Pokemon notFound!'
    ? <div>
        <Card pokemonName={pokemonFinded.name} />
      </div>
    : <h1> Pokemon Não Encontrado </h1>

  return (
    <PokemonContext.Provider value={
      {
        pokemonViewState,
        setPokemonViewState,
        pokemonFinded,
        setPokemonFinded,
        result,
        setResult,
        offset,
        setOffset,
        filterName,
        setFilterName,
        pokemonFiltered,
        pokemonsTotal,
        setPokemonsTotal,
        searchPokemon,
        pokemonResult,
        defaultLimit,
        handleSubmit,
        handleChange
      }
    }>
      {children}
    </PokemonContext.Provider>
  )
}
