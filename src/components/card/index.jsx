import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import getPokemonByName from '../../core/helper/getPokemonByName'

import './styles.scss'
import PokemonTypes from '../pokemonType/index'

function Card ({ pokemonName }) {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const pokemonInfos = async () => {
      setPokemon(await getPokemonByName(pokemonName))
    }

    pokemonInfos()
  }, [pokemonName])

  return (
    <Link to={`/details/${pokemonName}`} >
      <div className='container-card'>
        <div className='card'>
          <div className='card-top'>
            <span>#{pokemon.id}</span>
            <h1> {pokemonName} </h1>
          </div>
          <img src={pokemon?.sprites?.front_default} alt="pokemonImage" />
          <PokemonTypes info={pokemon} />
        </div>
      </div>
    </Link>
  )
}

export default Card
