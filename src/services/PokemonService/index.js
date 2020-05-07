import { pokemonAPI } from 'configs'
import { handleAsync } from 'utils'

export const PokemonGetService = async (id) => {
  const [res, err] = await handleAsync(pokemonAPI.get(id))
  if (err) throw err
  return res
}

export const PokemonGetListService = async (payload = {}) => {
  const [res, err] = await handleAsync(pokemonAPI.getList(payload))
  if (err) throw err
  return res
}
