import axios from "axios";

const tasksJson = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://task-management-backend-nine.vercel.app",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // }
});

export default tasksJson;
