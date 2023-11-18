import React from "react";
import { UsersAPI } from "../constants";

export class UserService {
  static async getUsers() {
    const response = await fetch(UsersAPI);
    const data = await response.json();
    return data;
  }
}
