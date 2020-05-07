import { moment, Cookie } from 'libraries'

export const handleAsync = async promise => {
  try {
    const response = await promise
    return [response, undefined]
  } catch (err) {
    return [undefined, err]
  }
}

export const convertDate = date => {
  if (!date) return null
  return moment(date).format('DD MMMM YYYY')
}

export const checkToken = date => {
  return Cookie.get(process.env.REACT_APP_SESSION_NAME)
}

export const setToken = (token = '') => {
  Cookie.set(process.env.REACT_APP_SESSION_NAME, token, { expires: parseInt(process.env.REACT_APP_SESSION_EXPIRES, 10) })
}
