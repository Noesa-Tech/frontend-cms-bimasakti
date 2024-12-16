import axios from 'axios'
import { useToast } from 'vue-toastification'

const Api = axios.create({
  baseURL: 'https://api-bimasakti.noesatech.com/api/v1',
})

Api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// Request interceptor
Api.interceptors.request.use(
  (req) => {
    if (localStorage.getItem('AuthStore')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('AuthStore')).token}`
    }
    return req
  },
  (error) => {
    // Handle request error
    return Promise.reject(error)
  }
)

// Response interceptor
Api.interceptors.response.use(
  (response) => {
    const toast = useToast()
    if (response.status === 200) {
      if (response.data.status) {
        return response.data
      }

      if (!response.data.status) {
        const toast = useToast()
        if (Array.isArray(response.data.message)) {
          response.data.message.forEach((msg) => {
            toast.error(msg)
          })

          return
        } else {
          return toast.error(response.data.message)
        }

        return Promise.reject(response.data.message)
      }
    }
  },
  (error) => {
    const toast = useToast()

    // Handle error responses
    // For example, you can check for specific error codes or network errors
    if (error.response) {
      if (error.response.status > 400) {
        toast.error(error.response.data.message)
        return Promise.reject(error.response.data.message)
      }

      if (error.response.status === 400) {
        for (const fieldName in error.response.data.data) {
          toast.error(error.response.data.data[fieldName][0])
        }

        return Promise.reject(error.response.data.message)
      }
    } else if (error.request) {
      // No response received
      return Promise.reject(error.request)
    } else {
      // Other errors
      toast.error(error.message)
      return Promise.reject(error.message)
    }
  }
)

export default Api
