import { Observable, Subject } from "rxjs";
import { UsersAPI } from "../constants";
import { BaseService } from "./BaseService";
import { AxiosResponse } from "axios";
import { User } from "../interfaces/UserInterfaces.ts";

export class UserService extends BaseService {
  userSubject = new Subject<AxiosResponse<User[], any>>();

  users$ = this.userSubject.asObservable();

  getUsers(): Observable<AxiosResponse<User[], any>> {
    this.httpClient.get<any[]>(UsersAPI).subscribe(this.userSubject);
    return this.users$;
  }
}
