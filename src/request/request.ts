import axios from 'axios'
import { Base64 } from 'js-base64'

const BASE_URL = '/json'

export async function loadJSON(api: string) {
  const response = await axios.get(BASE_URL + `/${api}.json`)
  return JSON.parse(Base64.decode(response.data.base64)).data
}


