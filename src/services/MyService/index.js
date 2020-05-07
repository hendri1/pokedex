import { myAPI } from 'configs'
import { handleAsync } from 'utils'

export const MyService = async (payload = {}) => {
  const [res, err] = await handleAsync(myAPI.get(payload))
  if (err) throw err
  return res.data
}
