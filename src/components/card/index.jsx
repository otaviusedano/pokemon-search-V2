import React, { useEffect, useState } from 'react'

import getPokemonByName from '../../core/helper/getPokemonByName'

import './index.scss'
import PokemonTypes from '../pokemonType'

function Card (poke) {
  const [pokemon, setPokemon] = useState()

  const pokemonId = poke.id
  const pokemonName = poke.name

  useEffect(() => {
    const pokemonInfos = async () => {
      setPokemon(await getPokemonByName(pokemonName))
    }

    pokemonInfos()
  }, [pokemon])

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-top'>
          <span> #{pokemonId} </span>
          <h1> {pokemonName} </h1>
        </div>
        <img src={pokemon?.sprites?.front_default} alt="pokemonImage" />
          <PokemonTypes name={pokemonName} />
      </div>
    </div>
  )
}

export default Card
