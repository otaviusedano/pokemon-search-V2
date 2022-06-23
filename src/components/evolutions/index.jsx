import React, { useEffect, useState } from 'react'
import { getEvolutionChain, getEvolutionPokemons } from '../../core/api'

import Card from '../card'

import './styles.scss'

function Evolutions ({ pokemon }) {
  const [evolutions, setEvolutions] = useState([])

  const getChain = async () => {
    const chain = await getEvolutionChain(pokemon.id)
    const chainUrl = chain.evolution_chain.url
    const evolution = await getEvolutionPokemons(chainUrl)
    const currentChain = evolution.chain.species.name
    setEvolutions(evolution.chain.evolves_to.map((evolve) => {
      let pokemonEvolutions = evolve.species.name
      evolve?.evolves_to?.forEach((species) => {
        console.log(species?.species?.name)
        pokemonEvolutions = [pokemonEvolutions, species?.species?.name]
        pokemonEvolutions = pokemonEvolutions.join().split(',')
      })

      if (pokemonEvolutions.indexOf(currentChain) < 0 && pokemonEvolutions < 2) {
        return [currentChain, pokemonEvolutions]
      }
      return [currentChain, ...pokemonEvolutions]
    }))
  }

  useEffect(() => {
    getChain()
  }, [pokemon.id])

  return (
    <>
      <div className='container-evolutions'>
        {evolutions.map((pokemons) => {
          console.log(pokemons)
          return pokemons.map((pokemonName, index) => {
            return (
              <div key={index}>
                <Card pokemonName={pokemonName} />
              </div>
            )
          })
        })}
      </div>
    </>
  )
}

export default Evolutions
