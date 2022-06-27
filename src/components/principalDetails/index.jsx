import React, { useState, useEffect } from 'react'

import PokemonTypes from '../pokemonTypes/index'

import getPokemonByName from '../../core/helper/getPokemonByName'

import './styles.scss'

function PrincipalInfos ({ pokemon }) {
  const [notFoundImg, setNotFoundImg] = useState([])
  const pokemonImg = pokemon?.sprites?.front_default
  const pokemonName = pokemon.name
  const pokemonId = pokemon.id
  const dittoImg = async () => {
    const ditto = await getPokemonByName('ditto')
    setNotFoundImg(ditto?.sprites?.front_default)
  }

  useEffect(() => {
    dittoImg()
  }, [])

  return (
    <div className='container-infos'>
      <span>#{pokemonId}</span>
      <h1> {pokemonName} </h1>
      <img src={pokemonImg || notFoundImg} alt="pokemonImage" />
    <PokemonTypes pokemon={pokemon} />
    </div>
  )
}

export default PrincipalInfos
