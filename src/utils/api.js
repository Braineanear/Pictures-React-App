import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID dGvDt4o2h-_jwtn8hRXea1QdkkOzaCtmNyoiDHCIXsI'
  }
});

export default api;
