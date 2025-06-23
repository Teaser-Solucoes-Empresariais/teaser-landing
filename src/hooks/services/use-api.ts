import axios from "axios"

const useApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
})

export default useApi
