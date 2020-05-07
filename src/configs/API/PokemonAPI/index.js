import * as endpoints from './endpoints'

export default class PokemonAPI {
  constructor (httpService) {
    this._http = httpService
  }

  async get (id) {
    try {
      const url = `${endpoints.GET}/${id}`
      const { data } = await this._http.get(url)

      return data
    } catch (error) {
      throw error.response.data
    }
  }

  async getList (payload = {}) {
    try {
      const url = `${endpoints.GET_LIST}`
      const { data } = await this._http.get(url, payload)

      return data
    } catch (error) {
      throw error.response.data
    }
  }
}
