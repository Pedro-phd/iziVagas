import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 60 * 1000
})

const isProd = process.env.NODE_ENV === 'production'
const url = isProd ? 'https://izivagas.vercel.app/' : 'http://localhost:3000/'

const clientApi = axios.create({
  baseURL: url,
  adapter: cache.adapter
})

export default clientApi
