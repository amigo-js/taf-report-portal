// const axios = require('axios')

// const axiosInstance = axios.create({
//     baseUrl: "http://localhost:8080/",
//     headers: {
//         'Authorization': 'Bearer 1e183007-e81c-4fcf-89d6-9b514492e88f'

//     }
// })
const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer 1e183007-e81c-4fcf-89d6-9b514492e88f'}
  });
  
  instance.get('/path')
  .then(response => {
      return response.data;
  })