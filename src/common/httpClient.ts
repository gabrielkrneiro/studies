import Axios from "axios-observable";
import { AxiosRequestConfig } from "axios";
// theFileYouDeclaredTheCustomConfigIn.ts

const httpClient = Axios.create({});

httpClient.interceptors.response.use((config) => {
  return { ...config, isLoading: false };
});

export { httpClient };
