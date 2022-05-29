import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const baseURL = 'http://localhost:3000/api'

const cache = setupCache({
  maxAge: 60 * 1000
})

const clientApi = axios.create({
  baseURL: baseURL,
  adapter: cache.adapter
})

export default clientApi
