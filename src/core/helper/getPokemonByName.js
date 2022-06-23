import { getName } from '../api'

const getPokemonByName = async (pokemonName) => {
  const pokemonInfo = await getName(pokemonName)
    .catch((err, data) => {
      if (err || data.count) {
        return 'Error'
      } else {
        return data
      }
    })
  const pokemonInfoFilter = pokemonInfo.count ? 'Error' : pokemonInfo
  return await pokemonInfoFilter
}

export default getPokemonByName
