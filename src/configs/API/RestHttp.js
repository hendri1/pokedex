import axios from 'axios'
import { setToken, checkToken } from 'utils'

const baseURL = process.env.REACT_APP_API_URL

const OPTIONS = {
  baseURL,
  timeout: 20000,
  headers: {}
}

const RestHttp = axios.create(OPTIONS)

RestHttp.interceptors.request.use(
  (config) => {
    const token = checkToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  }
)

RestHttp.interceptors.response.use((response) => {
  if (response.status === 0) {
    const error = new Error('Request timeout')
    error.response = response

    return null
  }

  const token = response.access_token
  if (token) setToken(token)

  return response
})

export default RestHttp
