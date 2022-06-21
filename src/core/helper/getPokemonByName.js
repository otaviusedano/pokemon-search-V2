import getName from '../api'

const getPokemonByName = async (pokeName) => {
  const pokemonInfo = await getName(pokeName)
  return await pokemonInfo
}

export default getPokemonByName
