import React, { useEffect, useState } from 'react'

import getName from '../../core/api'

import './index.scss'

function Card (poke) {
  const [pokemon, setPokemon] = useState()

  console.log()

  useEffect(() => {
    const pokemon = async () => {
      const details = await getName(poke.name)
      return setPokemon(details)
    }

    pokemon()
  }, [])

  return (
    <div className='container'>
      <div className='card'>
        <p className='pokemon-id'>#{poke.id}</p>
        <h1>
          {poke?.name}
        </h1>
        <img src={pokemon?.sprites?.front_default} alt="" />
      </div>
    </div>
  )
}

export default Card
