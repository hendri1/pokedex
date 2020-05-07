import * as endpoints from './endpoints'

export default class AuthService {
  constructor (httpService) {
    this._http = httpService
  }

  async get (payload) {
    try {
      const { data } = await this._http.get(endpoints.GET, payload)

      return data
    } catch (error) {
      throw error.response.data
    }
  }
}
