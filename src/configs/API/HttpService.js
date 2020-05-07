export default class HttpService {
  constructor (httpClient) {
    this._httpClient = httpClient
  }

  get (url, params = {}, responseType = 'json') {
    try {
      return this._httpClient.request({
        method: 'get',
        url,
        params,
        responseType
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }

  post (url, data, config = {}) {
    try {
      return this._httpClient.request({
        method: 'post',
        url,
        data,
        ...config
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }

  patch (url, data) {
    try {
      return this._httpClient.request({
        method: 'patch',
        url,
        data
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }

  put (url, data, conifg = {}) {
    try {
      return this._httpClient.request({
        method: 'put',
        url,
        data,
        ...conifg
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }

  delete (url, data = null) {
    try {
      return this._httpClient.request({
        method: 'delete',
        url,
        data
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
