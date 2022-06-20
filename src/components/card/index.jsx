import React, { useEffect, useState } from 'react'

import getPokemonByName from '../../core/helper/getPokemonByName'

import './style.scss'
import PokemonTypes from '../pokemonType/index'

function Card (poke) {
  const [pokemon, setPokemon] = useState([])

  // const pokemonId = poke
  const pokemonName = poke.name

  useEffect(() => {
    const pokemonInfos = async () => {
      setPokemon(await getPokemonByName(pokemonName))
    }

    pokemonInfos()
  }, [poke])

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-top'>
          <span>#{pokemon.id}</span>
          <h1> {pokemonName} </h1>
        </div>
        <img src={pokemon?.sprites?.front_default} alt="pokemonImage" />
          <PokemonTypes info={pokemon} />
      </div>
    </div>
  )
}

export default Card
