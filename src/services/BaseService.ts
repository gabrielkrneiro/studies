import Axios from "axios-observable";
import { httpClient } from "../common/httpClient";

export class BaseService {
  httpClient: Axios;

  constructor() {
    this.httpClient = httpClient;
  }
}
