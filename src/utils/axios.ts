import Axios from 'axios'

const baseURL = 'http://localhost:3333'
const axios = Axios.create({
  baseURL,
  timeout: 20000
})
// Intercept before sending HTTP requests
axios.interceptors.request.use(
  (response) => {
    /**
     * you can process config here
     */
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
// Intercept after received HTTP requests
axios.interceptors.response.use(
  (response) => {
    /**
     * you can process response and error here
     */
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      // eslint-disable-next-line no-console
      console.error(`Code: ${code}, Message: ${msg}`)
      // eslint-disable-next-line no-console
      console.error(`[Axios Error]`, error.response)
    } else {
      // eslint-disable-next-line no-console
      console.error(`${error}`)
    }
    return Promise.reject(error)
  }
)
export default axios
