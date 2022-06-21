import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ContainerPage from '../../components/containerPage'

import getPokemonName from '../../core/helper/getPokemonByName'
import { pokemonStats, pokemonTypes } from '../../core/helper/pokemonMapper'

function Details () {
  const params = useParams()
  const pokemonParams = params.pokemonName

  const [pokemon, setPokemon] = useState([])

  const pokemonInfos = async () => {
    const infos = await getPokemonName(pokemonParams)
    setPokemon(infos)
    console.log(infos)
  }

  useEffect(() => {
    pokemonInfos()
  }, [])

  return (
    <ContainerPage display={'flex'}>
      <main>
        <section>
          <Link to='/' >Voltar</Link>
          <div>
            {pokemon.id}
          </div>
          <div>
            <h1>{pokemon.name}</h1>
          </div>
          <div>
            {pokemonStats(pokemon)}
          </div>
          <div>
            {pokemonTypes(pokemon)}
          </div>
        </section>
      </main>
    </ContainerPage>
  )
}

export default Details
