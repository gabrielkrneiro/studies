import { BehaviorSubject, Observable } from "rxjs";
import { UsersAPI } from "../constants";
import { BaseService } from "./BaseService";
import { AxiosResponse } from "axios";
import { User } from "../interfaces/UserInterfaces";

export class UserService extends BaseService {
  userSubject = new RequestSubject<User[]>();

  users$ = this.userSubject.asObservable();

  getUsers(): RequestObservable<User[]> {
    this.request(UsersAPI, {
      method: "GET",
    }).subscribe(this.userSubject);
    return this.users$;
  }
}
