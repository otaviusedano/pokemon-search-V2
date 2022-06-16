import React, { useEffect, useState } from 'react'

import getPokemonByName from '../../core/helper/getPokemonByName'
import typeColors from '../../core/services/pokemonTypes'

import './index.scss'

function PokemonTypes (poke) {
  const [pokemon, setPokemon] = useState()

  const pokemonName = poke.name

  useEffect(() => {
    const pokemonInfos = async () => {
      setPokemon(await getPokemonByName(pokemonName))
    }

    pokemonInfos()
  }, [pokemon])

  const pokemonTypes = pokemon?.types.map((types, index) => {
    const typeName = types.type.name

    return (
      <div style={{ backgroundColor: typeColors[types?.type?.name] }} key={index} className='types'>
        <span className={types.type.name} key={index}>{typeName}</span>
      </div>
    )
  })

  return (
    <div className='container__types'>
      {pokemonTypes}
    </div>
  )
}

export default PokemonTypes
