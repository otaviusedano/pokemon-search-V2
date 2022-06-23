const apiUrl = 'https://pokeapi.co/api/v2/'

const getName = async (pokemonName) => {
  const pokemonNameAjusted = pokemonName.toLowerCase().trim(' ')
  const res = await fetch(apiUrl + `pokemon/${pokemonNameAjusted}`)
  const body = await res.json()
  return body
}

const getAll = async (page, limit = 24) => {
  const res = await fetch((apiUrl + `pokemon?limit=${limit}&offset=${page}`))
  const body = await res.json()
  return body
}

const getEvolutionChain = async (pokemonId) => {
  const res = await fetch(apiUrl + `pokemon-species/${pokemonId}`)
  const body = await res.json()
  return body
}

const getEvolutionPokemons = async (evolutionChainUrl) => {
  const res = await fetch(evolutionChainUrl)
  const body = await res.json()
  return body
}

export { getName, getAll, getEvolutionChain, getEvolutionPokemons }
