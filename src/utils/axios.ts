import axios from 'axios'

const baseURL = 'http://localhost:3000/api'

const clientApi = axios.create({
  baseURL: baseURL
})

export default clientApi
