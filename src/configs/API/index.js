import RestHttp from './RestHttp'
import HttpService from './HttpService'

import MyAPI from './MyAPI'

export const httpService = new HttpService(RestHttp)
export const myAPI = new MyAPI(httpService)
