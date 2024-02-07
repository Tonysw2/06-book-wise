import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
})

// api.interceptors.request.use(async (config) => {
//   await new Promise((resolve) =>
//     setTimeout(resolve, Math.round(Math.random() * 2000)),
//   )

//   return config
// })
