import { useCallback, useEffect, useState } from "react";
import { UserService } from "../services/UserService";
import { AxiosResponse } from "axios";
import { User } from "../interfaces/UserInterfaces.ts";
import { useRequest } from "ahooks";
import { Observable } from "rxjs";

interface IUseUsers {
  getUsers: () => void;
}

const handleRequest = (o: AxiosResponse<User[], any>) => {};

export const useUsers = (): IUseUsers => {
  const userService = new UserService();

  const {} = handleRequest();

  const getUsers = useCallback(() => {
    userService
      .getUsers()
      .subscribe((response) => {
        console.log("1 response:", response);
      })
      .unsubscribe();
  }, []);

  return {
    getUsers,
  };
};
