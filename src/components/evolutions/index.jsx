import React, { useEffect, useState, memo } from 'react'

import { getEvolutionChain, getEvolutionPokemons } from '../../core/api'

import Card from '../card'

import './styles.scss'

function Evolutions ({ pokemon }) {
  const [evolutions, setEvolutions] = useState([])

  const formatEvolutions = (evolution) => {
    return {
      next: evolution.evolves_to.map(formatEvolutions),
      pokemon: { name: evolution.species.name }
    }
  }

  const getChain = async () => {
    const evolutionChain = await getEvolutionChain(pokemon.id)
    const chainUrl = evolutionChain?.evolution_chain?.url
    pokemon.evolutions = await getEvolutionPokemons(chainUrl)
    pokemon.evolutions = formatEvolutions(pokemon?.evolutions?.chain)
    return pokemon?.evolutions
  }

  const getEvolution = async (chain) => {
    if (!chain) return
    if (chain.pokemon.name) {
      return pokemon.evolutions
    }
    return chain
  }

  const getAllEvolutions = async () => {
    const evolutions = await getEvolution(await getChain())
    setEvolutions(evolutions)
  }

  const getFirstPokemonChain = (chain) => {
    console.log(chain)
    if (chain.length <= 0) return
    return (
      <div className='evolutions'>
        <Card pokemonName={chain?.pokemon?.name} />
      </div>
    )
  }

  const generatePokemonEvolutions = (chain) => {
    if (!chain) return

    return (
      <>
        {
          chain.next?.map((chain, index) => {
            return (
              <div className='evolutions' key={index}>
                <Card pokemonName={chain?.pokemon?.name} />
                {generatePokemonEvolutions(chain)}
              </div>
            )
          })
        }
      </>
    )
  }

  useEffect(() => {
    getAllEvolutions()
  }, [pokemon])

  return (
    <>
      <div className='container-evolutions'>
        {getFirstPokemonChain(evolutions)}
        {generatePokemonEvolutions(evolutions)}
      </div>
    </>
  )
}

export default memo(Evolutions)
