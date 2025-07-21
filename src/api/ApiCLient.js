import axios from "axios";

const apiClient = axios.create({
  baseURL: " https://sonoodedu.com/api/public/api",
});

export default apiClient;
