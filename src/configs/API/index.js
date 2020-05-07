import RestHttp from './RestHttp'
import HttpService from './HttpService'

import MyAPI from './MyAPI'
import PokemonAPI from './PokemonAPI'

export const httpService = new HttpService(RestHttp)
export const myAPI = new MyAPI(httpService)
export const pokemonAPI = new PokemonAPI(httpService)
