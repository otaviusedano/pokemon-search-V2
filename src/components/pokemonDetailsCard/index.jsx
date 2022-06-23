import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import Evolutions from '../../components/evolutions'

import getPokemonName from '../../core/helper/getPokemonByName'
import PokemonStats from '../pokemonStats'
import PrincipalInfos from '../principalDetails'

import './styles.scss'

function PokemonDetailsCard () {
  const [pokemon, setPokemon] = useState([])
  const params = useParams()
  const pokemonParams = params.pokemonName

  const pokemonDetails = async () => {
    const infos = await getPokemonName(pokemonParams)
    setPokemon(infos)
  }

  useEffect(() => {
    pokemonDetails()
  }, [params])

  return (
    <section className='container-details-card'>
      <Link to='/'>Voltar</Link>
      <div className='pokemon'>
        <PrincipalInfos pokemon={pokemon} />
      </div>
        <PokemonStats pokemon={pokemon} />
        <Evolutions pokemon={pokemon} />
    </section>
  )
}

export default PokemonDetailsCard
