// axiosInstance.ts
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token or other headers here
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors here
    if (error.response && error.response.status === 401) {
      // Redirect to login page or handle unauthorized access
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;