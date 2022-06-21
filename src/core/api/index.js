const apiUrl = 'https://pokeapi.co/api/v2/'

const getName = async (pokemonName) => {
  const pokemonNameAjusted = pokemonName.toLowerCase().trim(' ')
  const res = await fetch(apiUrl + `pokemon/${pokemonNameAjusted}`)
  const body = await res.json()
  return body
}

export const getAll = async (page = 0, limit = 24) => {
  const res = await fetch((apiUrl + `pokemon?limit=${limit}&offset=${page}`))
  const body = await res.json()
  return body
}

export default getName
