const apiUrl = 'https://pokeapi.co/api/v2/'

const getName = async (pokemonName) => {
  const res = await fetch(apiUrl + `pokemon/${pokemonName}`)
  const body = await res.json()
  return body
}

export const getAll = async (page = 0, limit = 20) => {
  const res = await fetch((apiUrl + `pokemon?limit=${limit}&offset=${page}`))
  const body = await res.json()
  return body
}

export default getName
