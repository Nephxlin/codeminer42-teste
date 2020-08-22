import axios from 'axios'

const api = axios.create({
  baseURL : 'ttp://zssn-backend-example.herokuapp.com/api/people.json'
})

export default api