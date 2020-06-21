import axios from "axios";
import logService from "./logService";

axios.interceptors.response.use(null, (error) => {
  console.log("Interceptor called");
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("An unexpected error occured");
    logService.log(error);
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
