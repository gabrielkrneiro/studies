import Axios from "axios-observable";

const httpClient = Axios.create({});

httpClient.interceptors.response.use((config) => {
  console.log("config:", config);

  return config;
});

export { httpClient };
