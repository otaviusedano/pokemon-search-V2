import React, { useEffect, useState } from 'react'

import getName, { getAll } from '../../core/api/index'

import './index.scss'
import Card from '../../components/card'

function Home () {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState()
  const [pokemonViewState, setPokemonViewState] = useState([])

  const search = async () => {
    const pokemon = await getName(pokemonName)
    setPokemonImage(pokemon.sprites.front_default)
    return pokemon
  }

  useEffect(() => {
    const allPokemons = async () => {
      const res = await getAll()
      const pokemons = await res.results
      setPokemonViewState(pokemonViewState.concat(pokemons))
    }

    allPokemons()
  }, [])

  return (
    <div className='app'>
      <h1>Coloque o nome do pokemon</h1>
      <form className='container-search'>
        <input onInput={(e) => setPokemonName(e.currentTarget.value)} value={pokemonName} type="text" />
        <button onClick={async () => await search()} type='button'>Enviar</button>
      </form>
      <img src={pokemonImage} alt="pokeImg" />
      <div className='container-pokedex'>
        {pokemonViewState.map((pokemon, index) => (
          <div key={index} >
            <Card id={index + 1} name={pokemon.name} ></Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
