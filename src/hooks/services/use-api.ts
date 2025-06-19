import axios from "axios"

const useApi = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

export default useApi
