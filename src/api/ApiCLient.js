import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://sonood.app4orce.com/api/public/api",
});

export default apiClient;
