import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Replace 'https://api.example.com' with your API base URL
});

export default api;
