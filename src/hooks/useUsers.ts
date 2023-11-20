import { useCallback, useEffect } from "react";
import { UserService } from "../services/UserService";
import { useObservable } from "observable-hooks";

interface IUseUsers {
  getUsers: () => void;
}

export const useUsers = (): IUseUsers => {
  const userService = new UserService();
  const { users$ } = userService;
  const {} = useObservable(users$);

  useEffect(() => {
    users$.subscribe((users) => {
      console.log("users:", users);
    });
  }, [users$]);

  const getUsers = useCallback(() => {
    userService.getUsers();
  }, []);

  return {
    getUsers,
  };
};
