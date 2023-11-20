import { AxiosRequestConfig, AxiosResponse } from "axios";
import Axios from "axios-observable";
import { BehaviorSubject, Observable } from "rxjs";
import { httpClient } from "../common/httpClient";

export class RequestSubject<T> extends BehaviorSubject<
  AxiosResponse<T, any> | { isLoading: boolean }
> {
  constructor() {
    super({ isLoading: true });
  }
}

export type RequestObservable<T> = Observable<{ isLoading: boolean } | AxiosResponse<T, any>>;

export class BaseService {
  httpClient: Axios;
  tmpSubj: RequestSubject<any>;

  constructor() {
    this.httpClient = httpClient;
    this.tmpSubj = new RequestSubject();
  }

  request(url: string, config: AxiosRequestConfig) {
    return this.httpClient.request({
      ...config,
      url,
    } as AxiosRequestConfig);
  }
}
