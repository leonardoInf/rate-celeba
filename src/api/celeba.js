import axios from "axios";

export default axios.create({
  baseURL: `http://${process.env.REACT_APP_HOST}:3010`,
});
