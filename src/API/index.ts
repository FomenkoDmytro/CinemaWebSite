import axios from "axios";

// axios.defaults.baseURL = "https://localhost:7216/api/";

const api = axios.create({
  baseURL: "https://localhost:7216/api/",
});

export default api;
// export default axios;
