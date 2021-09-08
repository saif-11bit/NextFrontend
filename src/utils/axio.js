import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/'

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Authorization': localStorage.getItem('access_token') ? "Bearer " + localStorage.getItem('access_token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        // Prevent infinite loops
        if (error.response.status === 401 && originalRequest.url === baseURL+'auth/api/token/refresh/') {
            window.location.href = '/auth/login/';
            return Promise.reject(error);
        }
     
      // specific error handling done elsewhere
      return Promise.reject(error);
  }
);

export default axiosInstance