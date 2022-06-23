import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import getPokemonByName from '../../core/helper/getPokemonByName'
import PrincipalInfos from '../principalDetails'

import './styles.scss'

function Card ({ pokemonName }) {
  const [pokemon, setPokemon] = useState([])

  const pokemonInfos = async () => {
    setPokemon(await getPokemonByName(pokemonName))
  }

  useEffect(() => {
    pokemonInfos()
  }, [pokemonName])

  return (
    <Link to={`/details/${pokemonName}`} >
      <div className='container-card'>
        <div className='card'>
          <PrincipalInfos pokemon={pokemon} />
        </div>
      </div>
    </Link>
  )
}

export default Card
