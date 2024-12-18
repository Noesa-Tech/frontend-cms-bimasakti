import axios from 'axios'
import eventBus from '@/composables/eventBus';

const Api = axios.create({
  baseURL: 'https://api-bimasakti.noesatech.com/api/v1',
})

Api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// Request interceptor
Api.interceptors.request.use(
  (req) => {
    const authStore = localStorage.getItem('AuthStore');
    if (authStore) {
      const parsedAuthStore = JSON.parse(authStore);
      req.headers.Authorization = `Bearer ${parsedAuthStore.token}`;
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
    if (response.status === 200) {
      if (response.data.status) {
        return response.data
      }
      if (!response.data.status) {
        if (Array.isArray(response.data.message)) {
          response.data.message.forEach((msg : any) => {
            eventBus.showToast = { type: 'error', message: msg };
          })

          return
        } else {
          eventBus.showToast = { type: 'error', message: response.data.message };
        }

        return Promise.reject(response.data.message)
      }
    }
  },
  (error) => {
    // Handle error responses
    // For example, you can check for specific error codes or network errors
    if (error.response) {
      if (error.response.status > 400) {
        eventBus.showToast = { type: 'error', message: error.response.data.message };
        return Promise.reject(error.response.data.message)
      }

      if (error.response.status === 400) {
        for (const fieldName in error.response.data.data) {
          eventBus.showToast = { type: 'error', message: error.response.data.data[fieldName][0] };
        }
        
        return Promise.reject(error.response.data.message)
      }
    } else if (error.request) {
      // No response received
      return Promise.reject(error.request)
    } else {
      // Other errors
      eventBus.showToast = { type: 'error', message: error.message };
      return Promise.reject(error.message)
    }
  }
)

export default Api
