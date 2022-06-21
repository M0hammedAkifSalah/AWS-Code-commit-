import axios from "axios";

const token = localStorage.getItem("token");
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default {
  //Login
  login(data) {
    return http.post("auth/login", data);
  },

  //Teachers APIS
  getActivities(data) {
    return http.post("activity/getTeachersData", data);
  },
};
