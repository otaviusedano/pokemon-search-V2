import getName from '../api'

const getPokemonByName = async (pokeName) => {
  const pokemonInfo = await getName(pokeName)
  return pokemonInfo
}

export default getPokemonByName
