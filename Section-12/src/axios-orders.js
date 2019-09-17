import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-project-6c97c.firebaseio.com/"
});

export default instance;
