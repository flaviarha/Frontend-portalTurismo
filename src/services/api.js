import axios from  "axios";
const api = axios.create({
    baseURL: 'https://backend-portalturismo-3rae.onrender.com/api'
})
export default api;