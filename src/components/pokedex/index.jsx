import React, { useContext } from 'react'

import { PokemonContext } from '../../contexts/pokemonContext'

import './styles.scss'

function Pokedex () {
  const { pokemonFiltered, result, pokemonResult } = useContext(PokemonContext)

  return (
    <section>
      <div className='container-pokemons'>
        {result ? pokemonResult : pokemonFiltered}
      </div>
    </section>
  )
}

export default Pokedex
