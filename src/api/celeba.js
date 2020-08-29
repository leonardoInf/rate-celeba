import axios from "axios";

const HOST = process.env.REACT_APP_HOST;
const PORT = process.env.REACT_APP_PORT;

export default axios.create({
  baseURL: `http://${HOST}:${PORT}`,
});
